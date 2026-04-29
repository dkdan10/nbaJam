const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

const DEFAULT_PORT = 8080;

const createInitialState = () => ({
    sockets: {},
    playerQueue: [],
    games: {}
});

const createGameId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

const createGameServer = ({ app = express(), state = createInitialState(), io } = {}) => {
    const distPath = path.join(__dirname, "dist");
    const clientPath = path.join(__dirname, "client");

    app.get("/healthz", (req, res) => {
        res.status(200).send("ok");
    });

    app.use(express.static(distPath));
    app.use("/client", express.static(clientPath));

    app.get("*", (req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
    });

    if (io) attachSocketHandlers(io, state);

    return { app, state };
};

const attachSocketHandlers = (io, state = createInitialState()) => {
    const sockets = state.sockets;
    const playerQueue = state.playerQueue;
    const games = state.games;

    const emitToSocket = (socketId, event, payload) => {
        const recipient = sockets[socketId];
        if (recipient) recipient.emit(event, payload);
    };

    const emitToOpponent = (game, fromSocket, event, payload) => {
        if (!game) return;
        const recipientId = game.leftPlayerId === fromSocket ? game.rightPlayerId : game.leftPlayerId;
        emitToSocket(recipientId, event, payload);
    };

    const removeFromQueue = (socketId) => {
        let index = playerQueue.indexOf(socketId);
        while (index > -1) {
            playerQueue.splice(index, 1);
            index = playerQueue.indexOf(socketId);
        }
    };

    const deleteGame = (gameId) => {
        if (!gameId || !games[gameId]) return;
        const game = games[gameId];
        if (sockets[game.leftPlayerId]) sockets[game.leftPlayerId].currentGameId = null;
        if (sockets[game.rightPlayerId]) sockets[game.rightPlayerId].currentGameId = null;
        delete games[gameId];
    };

    const findGame = (gameId) => games[gameId] || null;

    const checkQueue = () => {
        while (playerQueue.length > 1) {
            const leftPlayerId = playerQueue.shift();
            const rightPlayerId = playerQueue.shift();

            if (leftPlayerId === rightPlayerId || !sockets[leftPlayerId] || !sockets[rightPlayerId]) {
                continue;
            }

            const game = {
                id: createGameId(),
                leftPlayerId,
                rightPlayerId,
                leftScore: 0,
                rightScore: 0,
                leftReady: false,
                rightReady: false,
                justChangedPossession: false,
                justScored: false
            };

            games[game.id] = game;
            sockets[leftPlayerId].currentGameId = game.id;
            sockets[rightPlayerId].currentGameId = game.id;

            const payload = {
                leftPlayerId,
                rightPlayerId,
                leftReady: false,
                rightReady: false,
                gameId: game.id
            };

            emitToSocket(leftPlayerId, "matchFound", payload);
            emitToSocket(rightPlayerId, "matchFound", payload);
        }
    };

    const handleReady = (side, data) => {
        const game = findGame(data && data.gameId);
        if (!game) return;

        if (side === "left") game.leftReady = true;
        if (side === "right") game.rightReady = true;

        if (game.leftReady && game.rightReady) {
            emitToSocket(game.leftPlayerId, "startGame", data);
            emitToSocket(game.rightPlayerId, "startGame", data);
            return;
        }

        const event = side === "left" ? "updatedLeftReady" : "updatedRightReady";
        emitToSocket(game.leftPlayerId, event, data);
        emitToSocket(game.rightPlayerId, event, data);
    };

    io.sockets.on("connection", (socket) => {
        sockets[socket.id] = socket;

        socket.on("disconnect", () => {
            const socketToRemove = sockets[socket.id];
            delete sockets[socket.id];
            removeFromQueue(socket.id);

            if (!socketToRemove || !socketToRemove.currentGameId) return;

            const game = findGame(socketToRemove.currentGameId);
            if (!game) return;

            emitToOpponent(game, socket.id, "endGameFromDisconnect");
            deleteGame(game.id);
        });

        socket.on("playerAddedToQueue", () => {
            if (socket.currentGameId || playerQueue.includes(socket.id)) return;
            playerQueue.push(socket.id);
            checkQueue();
        });

        socket.on("charChanged", (data) => {
            const game = findGame(data && data.gameId);
            if (!game) return;
            emitToSocket(game.leftPlayerId, "updatedSelectedChars", data);
            emitToSocket(game.rightPlayerId, "updatedSelectedChars", data);
        });

        socket.on("leftReady", (data) => handleReady("left", data));
        socket.on("rightReady", (data) => handleReady("right", data));

        socket.on("updateMyPos", (data) => {
            const game = findGame(data && data.gameId);
            if (!game) return;
            emitToOpponent(game, data.fromSocket, "updateOtherPos", data);
        });

        socket.on("changeOfPossession", (data) => {
            const game = findGame(data && data.gameId);
            if (!game || game.justChangedPossession) return;
            emitToOpponent(game, data.fromSocket, "updateBallPossession", data);
            game.justChangedPossession = true;
        });

        socket.on("registeredPossessionChange", (data) => {
            const game = findGame(data && data.gameId);
            if (game) game.justChangedPossession = false;
        });

        socket.on("removeBallPossession", (data) => {
            const game = findGame(data && data.gameId);
            if (!game) return;
            emitToOpponent(game, data.fromSocket, "updateNoBallPossession", data);
        });

        socket.on("updateBallPos", (data) => {
            const game = findGame(data && data.gameId);
            if (!game) return;
            emitToOpponent(game, data.fromSocket, "updateBallPos", data);
        });

        socket.on("updateScore", (data) => {
            const game = findGame(data && data.gameId);
            if (!game || game.justScored) return;

            if (data.addToHoop === "LEFT") game.leftScore += 2;
            else if (data.addToHoop === "RIGHT") game.rightScore += 2;
            else return;

            const payload = {
                leftScore: game.leftScore,
                rightScore: game.rightScore
            };

            emitToSocket(game.leftPlayerId, "updateNewScore", payload);
            emitToSocket(game.rightPlayerId, "updateNewScore", payload);

            game.justScored = true;
            setTimeout(() => {
                if (games[game.id]) games[game.id].justScored = false;
            }, 1000);
        });
    });

    return {
        state,
        checkQueue,
        removeFromQueue
    };
};

const startServer = () => {
    const app = express();
    const server = http.Server(app);
    const io = new Server(server);
    const { state } = createGameServer({ app, io });
    const port = process.env.PORT || DEFAULT_PORT;

    server.listen(port, () => {
        console.log(`server started on ${port}`);
    });

    return { app, server, io, state };
};

if (require.main === module) {
    startServer();
}

module.exports = {
    attachSocketHandlers,
    createGameServer,
    createInitialState,
    startServer
};
