import { describe, expect, it, vi } from "vitest";
import appModule from "../app.js";

const { attachSocketHandlers, createInitialState } = appModule;

class FakeSocket {
    constructor(id) {
        this.id = id;
        this.handlers = {};
        this.sent = [];
        this.currentGameId = null;
    }

    on(event, handler) {
        this.handlers[event] = handler;
    }

    emit(event, payload) {
        this.sent.push({ event, payload });
    }

    trigger(event, payload) {
        this.handlers[event](payload);
    }
}

const createHarness = () => {
    let connect;
    const io = {
        sockets: {
            on: (event, handler) => {
                if (event === "connection") connect = handler;
            }
        }
    };
    const state = createInitialState();
    attachSocketHandlers(io, state);

    return {
        state,
        connectSocket: (socket) => connect(socket)
    };
};

describe("realtime matchmaking", () => {
    it("pairs two unique queued sockets into one game", () => {
        const { state, connectSocket } = createHarness();
        const left = new FakeSocket("left");
        const right = new FakeSocket("right");

        connectSocket(left);
        connectSocket(right);
        left.trigger("playerAddedToQueue");
        right.trigger("playerAddedToQueue");

        const games = Object.values(state.games);
        expect(games).toHaveLength(1);
        expect(games[0].leftPlayerId).toBe("left");
        expect(games[0].rightPlayerId).toBe("right");
        expect(left.sent[0].event).toBe("matchFound");
        expect(right.sent[0].event).toBe("matchFound");
    });

    it("does not let duplicate queue requests self-match", () => {
        const { state, connectSocket } = createHarness();
        const socket = new FakeSocket("player");

        connectSocket(socket);
        socket.trigger("playerAddedToQueue");
        socket.trigger("playerAddedToQueue");

        expect(state.playerQueue).toEqual(["player"]);
        expect(Object.values(state.games)).toHaveLength(0);
    });

    it("ignores ready events with invalid game ids", () => {
        const { connectSocket } = createHarness();
        const socket = new FakeSocket("player");

        connectSocket(socket);

        expect(() => socket.trigger("leftReady", { gameId: "missing" })).not.toThrow();
        expect(() => socket.trigger("rightReady", { gameId: "missing" })).not.toThrow();
    });

    it("removes queued players on disconnect", () => {
        const { state, connectSocket } = createHarness();
        const socket = new FakeSocket("player");

        connectSocket(socket);
        socket.trigger("playerAddedToQueue");
        socket.trigger("disconnect");

        expect(state.playerQueue).toEqual([]);
        expect(state.sockets.player).toBeUndefined();
    });

    it("notifies the opponent and removes the game on disconnect", () => {
        const { state, connectSocket } = createHarness();
        const left = new FakeSocket("left");
        const right = new FakeSocket("right");

        connectSocket(left);
        connectSocket(right);
        left.trigger("playerAddedToQueue");
        right.trigger("playerAddedToQueue");
        left.trigger("disconnect");

        expect(Object.values(state.games)).toHaveLength(0);
        expect(right.sent.some((message) => message.event === "endGameFromDisconnect")).toBe(true);
    });

    it("updates the score once during the score debounce window", () => {
        vi.useFakeTimers();
        const { state, connectSocket } = createHarness();
        const left = new FakeSocket("left");
        const right = new FakeSocket("right");

        connectSocket(left);
        connectSocket(right);
        left.trigger("playerAddedToQueue");
        right.trigger("playerAddedToQueue");

        const game = Object.values(state.games)[0];
        left.trigger("updateScore", { gameId: game.id, addToHoop: "LEFT" });
        left.trigger("updateScore", { gameId: game.id, addToHoop: "LEFT" });

        expect(game.leftScore).toBe(2);
        expect(left.sent.filter((message) => message.event === "updateNewScore")).toHaveLength(1);
        expect(right.sent.filter((message) => message.event === "updateNewScore")).toHaveLength(1);

        vi.useRealTimers();
    });
});
