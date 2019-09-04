const express = require('express')
const app = express()
const server = require("http").Server(app)

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html')
});
app.use('/', express.static(__dirname + "/client"))

const port = process.env.PORT || 8080
server.listen(port)
console.log("server started")

const SOCKET_LIST = {}
const PLAYER_QUEUE = []
const GAMES = {}

const io = require("socket.io")(server, {})
io.sockets.on("connection", function(socket) {
    socket.number = "" + (100 * Math.random())

    SOCKET_LIST[socket.id] = socket
    // socket.emit('transmitSocketInfo', {
    //     id: 10000 * Math.Ra
    // })
    socket.on('disconnect', function() {
        const socketToRemove = SOCKET_LIST[socket.id]
        delete SOCKET_LIST[socket.id]
        if (socketToRemove.currentGameId) {
            const game = GAMES[socketToRemove.currentGameId]
            if (game && game.leftPlayerId !== socketToRemove.id) {
                if (SOCKET_LIST[game.leftPlayerId]) SOCKET_LIST[game.leftPlayerId].emit("endGameFromDisconnect")
            } else if (game){
                if (SOCKET_LIST[game.rightPlayerId]) SOCKET_LIST[game.rightPlayerId].emit("endGameFromDisconnect")
            }
            delete GAMES[socketToRemove.currentGameId]
        }
        const playerQindex = PLAYER_QUEUE.indexOf(socket.id);
        if (playerQindex > -1) {
            PLAYER_QUEUE.splice(playerQindex, 1);
        }

    })

    socket.on('playerAddedToQueue', function() {
        PLAYER_QUEUE.push(socket.id)
        checkQueue()
    })

    socket.on('charChanged', function(data) {
        const game = GAMES[data.gameId]
        if (game && SOCKET_LIST[game.leftPlayerId]) SOCKET_LIST[game.leftPlayerId].emit("updatedSelectedChars", data)
        if (game && SOCKET_LIST[game.rightPlayerId]) SOCKET_LIST[game.rightPlayerId].emit("updatedSelectedChars", data)
    })

    socket.on('leftReady', function(data) {
        const game = GAMES[data.gameId]
        game.leftReady = true
        if (game && game.rightReady) {
            if (SOCKET_LIST[game.leftPlayerId]) SOCKET_LIST[game.leftPlayerId].emit("startGame", data)
            if (SOCKET_LIST[game.rightPlayerId]) SOCKET_LIST[game.rightPlayerId].emit("startGame", data)
        } else if (game) {
            if (SOCKET_LIST[game.leftPlayerId]) SOCKET_LIST[game.leftPlayerId].emit("updatedLeftReady", data)
            if (SOCKET_LIST[game.rightPlayerId]) SOCKET_LIST[game.rightPlayerId].emit("updatedLeftReady", data)
        }
    })

    socket.on('rightReady', function (data) {
        const game = GAMES[data.gameId]
        game.rightReady = true
        if (game && game.leftReady) {
            if (SOCKET_LIST[game.leftPlayerId]) SOCKET_LIST[game.leftPlayerId].emit("startGame", data)
            if (SOCKET_LIST[game.rightPlayerId]) SOCKET_LIST[game.rightPlayerId].emit("startGame", data)
        } else if (game) {
            if (SOCKET_LIST[game.leftPlayerId]) SOCKET_LIST[game.leftPlayerId].emit("updatedRightReady", data)
            if (SOCKET_LIST[game.rightPlayerId]) SOCKET_LIST[game.rightPlayerId].emit("updatedRightReady", data)
        }
    })

    socket.on('updateMyPos', function (data) {
        const game = GAMES[data.gameId]
        if (game && (game.leftPlayerId !== data.fromSocket)) {
            if (SOCKET_LIST[game.leftPlayerId]) SOCKET_LIST[game.leftPlayerId].emit("updateOtherPos", data)
        } else if (game) {
            if (SOCKET_LIST[game.rightPlayerId]) SOCKET_LIST[game.rightPlayerId].emit("updateOtherPos", data)
        }
    })


    socket.on('changeOfPossesion', function (data) {
        const game = GAMES[data.gameId]
        if (game && !game.justChangedPossesion && game.leftPlayerId !== data.fromSocket) {
            SOCKET_LIST[game.leftPlayerId].emit("updateBallPossesion", data)
        } else if (game && !game.justChangedPossesion) {
            SOCKET_LIST[game.rightPlayerId].emit("updateBallPossesion", data)
        }
        if (game) game.justChangedPossesion = true
    })
    socket.on('registeredPossesionChange', function (data) {
        const game = GAMES[data.gameId]
        if (game) game.justChangedPossesion = false
    })

    socket.on('removeBallPossession', function (data) {
        const game = GAMES[data.gameId]
        if (game && game.leftPlayerId !== data.fromSocket) {
            SOCKET_LIST[game.leftPlayerId].emit("updateNoBallPossesion", data)
        } else if (game) {
            SOCKET_LIST[game.rightPlayerId].emit("updateNoBallPossesion", data)
        }
    })

    socket.on('updateBallWithPos', function (data) {
        const game = GAMES[data.gameId]
        if (game && game.leftPlayerId !== data.fromSocket) {
            SOCKET_LIST[game.leftPlayerId].emit("updateBallPos", data)
        } else if (game) {
            SOCKET_LIST[game.rightPlayerId].emit("updateBallPos", data)
        }
    })

    console.log("socket connection")
})


const checkQueue = () => {
    if (PLAYER_QUEUE.length > 1) {
        const gameObj = {
            id: new Date().getTime(),
            leftPlayerId: PLAYER_QUEUE[0],
            rightPlayerId: PLAYER_QUEUE[1]
        }
        GAMES[gameObj.id] = gameObj
        for (let i = 0; i < 2; i++) {
            SOCKET_LIST[PLAYER_QUEUE[i]].emit('matchFound', {
                leftPlayerId: PLAYER_QUEUE[0],
                rightPlayerId: PLAYER_QUEUE[1],
                leftReady: false,
                rightReady: false,
                gameId: gameObj.id
            })
            SOCKET_LIST[PLAYER_QUEUE[0]].currentGameId = gameObj.id
            SOCKET_LIST[PLAYER_QUEUE[1]].currentGameId = gameObj.id
        }
        PLAYER_QUEUE.splice(0,2)
    }
}