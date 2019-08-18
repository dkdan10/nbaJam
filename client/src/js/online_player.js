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

export default class OnlinePlayer extends Player {
    constructor(court, ball, spriteSrc, startSide, active) {
        super(court, ball, spriteSrc)
        
        this.position = startSide === "LEFT" ? ({
            x: 0,
            y: this.court.position.y - this.height
        }) : ({
            x: this.court.width - this.width,
            y: this.court.position.y - this.height
        })

        if (!this.active) this.color = "black"
        this.active = active
    }



    animate(ctx) {
        if (this.active) {
            this.move()
        }

        ctx.drawImage(this.sprite,
            this.position.x - 5,
            this.position.y - this.sprite.height / 3)
    }

    move() {
        if (key.isPressed('right')) {
            this.position.x += CONSTANTS.MOVESPEED;
            this.facingRight = true
        }
        if (key.isPressed('left')) {
            this.position.x -= CONSTANTS.MOVESPEED;
            this.facingRight = false
        }

        // JUMPING
        if (key.isPressed('up') && !this.jumping) {
            this.velocity.y = CONSTANTS.JUMP_HEIGHT;
            this.jumping = true
        }

        if (key.isPressed('space')) {
            this.preformAction();
        }

        this.checkBall()

        this.handleGravity()

        this.checkBounds()
    }

}

