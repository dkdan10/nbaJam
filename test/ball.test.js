import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../client/src/js/socket.js", () => ({
    default: {
        id: "socket-1",
        emit: vi.fn()
    }
}));

const { default: Ball } = await import("../client/src/js/ball.js");
const { default: socket } = await import("../client/src/js/socket.js");

const createBall = () => {
    const dimensions = { width: 820, height: 480 };
    const court = {
        width: 820,
        position: { y: 408 }
    };
    const leftHoop = {
        scoreHitbox: {
            position: { x: 65, y: 144 },
            width: 20
        }
    };
    const rightHoop = {
        scoreHitbox: {
            position: { x: 735, y: 144 },
            width: 20
        }
    };
    const ball = new Ball(dimensions, court, leftHoop, rightHoop, "game-1");
    const player = {
        color: "red",
        facingRight: true,
        width: 40,
        position: { x: 300, y: 338 }
    };

    ball.possession = player;

    return { ball, player };
};

describe("Ball shooting", () => {
    beforeEach(() => {
        vi.useFakeTimers();
        socket.emit.mockClear();
    });

    it("releases possession after a tap shot timeout", () => {
        const { ball } = createBall();

        ball.shoot();

        expect(ball.possession).not.toBeNull();

        vi.advanceTimersByTime(20);

        expect(ball.possession).toBeNull();
        expect(ball.shootingTimeout).toBeNull();
        expect(socket.emit).toHaveBeenCalledWith("removeBallPossession", expect.objectContaining({
            gameId: "game-1",
            fromSocket: "socket-1"
        }));
    });

    it("auto-releases at max shot power", () => {
        const { ball } = createBall();

        for (let i = 0; i < 60; i += 1) {
            ball.shoot();
        }

        expect(ball.possession).toBeNull();
        expect(ball.power).toBe(0);
        expect(ball.shootingTimeout).toBeNull();
    });

    it("does not throw if release runs after possession is already gone", () => {
        const { ball } = createBall();
        ball.possession = null;

        expect(() => ball.releaseBall()).not.toThrow();
    });
});
