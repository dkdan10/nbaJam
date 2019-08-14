import Rect from './utils/rect';
import key from './utils/keymaster';


const CONSTANTS = {
    GRAVITY: 0.5,
    PLAYER_WIDTH: 40,
    PLAYER_HEIGHT: 70,
    MOVESPEED: 5,
    // WITH_BALL_MOVESPEED: 3.5,
    JUMP_HEIGHT: 14,
    // ON_FIRE_JUMP_HEIGHT: 16
};

export default class Player extends Rect {
    constructor(court, ball) {
        super({ width: CONSTANTS.PLAYER_WIDTH, height: CONSTANTS.PLAYER_HEIGHT })
        this.court = court
        this.ball = ball

        this.velocity = {
            x: 0,
            y: 0
        }
        this.position = {
            x: 0,
            y: this.court.position.y - CONSTANTS.PLAYER_HEIGHT
        }
        this.color = "red";
        this.jumping = false;
        this.facingRight = true;
    }

    animate(ctx) {
        this.move();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    move () {
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

        if (key.isPressed('/')) {
            this.preformAction();
        }

        this.checkBall() 

        this.handleGravity()

        this.checkBounds()
    }

    preformAction() {
        if (this.ball.possession === this) {
            // Hold to shoot. 
            this.ball.shoot()
        }
    }

    checkBall() {
        if (!this.ball.possession && this.ball.isOverlappingRect(this)) {
            this.ball.claimPossession(this)
        }
    }

    handleGravity() {
        this.position.y -= this.velocity.y;
        // GRAVITY
        // if the pos is greater than the floor
        if (this.position.y + this.height < this.court.position.y) {
            this.velocity.y -= CONSTANTS.GRAVITY;
            // else set the pos to the floor
        } else {
            this.velocity.y = 0
            this.position.y = this.court.position.y - this.height
            this.jumping = false
        }
    }

    checkBounds() {
        if (this.position.x > this.court.width - this.width) {
            this.position.x = this.court.width - this.width
        } else if (this.position.x < 0) {
            this.position.x = 0
        }
    }

}
