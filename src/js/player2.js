import Player from "./player";

const CONSTANTS = {
    GRAVITY: 0.5,
    PLAYER_WIDTH: 40,
    PLAYER_HEIGHT: 70,
    MOVESPEED: 5,
    // WITH_BALL_MOVESPEED: 3.5,
    JUMP_HEIGHT: 14,
    // ON_FIRE_JUMP_HEIGHT: 16
};

export default class Player2 extends Player {
    constructor(court, ball, spriteSrc) {
        super(court, ball, spriteSrc)

        this.position = {
            x: 0,
            y: this.court.position.y - this.height
        }
        this.color = "black";
        this.jumping = false;
        this.facingRight = false;
    }

    move() {
        if (key.isPressed('d')) {
            this.position.x += CONSTANTS.MOVESPEED;
            this.facingRight = true
        }
        if (key.isPressed('a')) {
            this.position.x -= CONSTANTS.MOVESPEED;
            this.facingRight = false
        }

        // JUMPING
        if (key.isPressed('w') && !this.jumping) {
            this.velocity.y = CONSTANTS.JUMP_HEIGHT;
            this.jumping = true
        }

        if (key.isPressed('q')) {
            this.preformAction();
        }

        this.checkBall()

        this.handleGravity()

        this.checkBounds()
    }

}