import Rect from './utils/rect';
import key from './utils/keymaster';


const CONSTANTS = {
    GRAVITY: 0.5,
    TERMINAL_VEL: 8,
    PLAYER_WIDTH: 30,
    PLAYER_HEIGHT: 50,
    MOVESPEED: 4
    // WITH_BALL_MOVESPEED: 3.5
};

export default class Player extends Rect {
    constructor(dimensions) {
        super({ width: CONSTANTS.PLAYER_WIDTH, height: CONSTANTS.PLAYER_HEIGHT })
        this.velocity = {
            x: 0,
            y: 0
        }
        this.dimensions = dimensions;
        this.position = {
            x: 0,
            y: this.dimensions.height - CONSTANTS.PLAYER_HEIGHT
        }
        this.color = "red";
        this.jumping = false;
    }

    animate(ctx) {
        this.move();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, CONSTANTS.PLAYER_WIDTH, CONSTANTS.PLAYER_HEIGHT);
    }

    move () {
        if (key.isPressed('right')) this.position.x += CONSTANTS.MOVESPEED;
        if (key.isPressed('left')) this.position.x -= CONSTANTS.MOVESPEED;

        // JUMPING
        if (key.isPressed('up') && !this.jumping) {
            this.velocity.y = 10;
            this.jumping = true
        }
        this.position.y -= this.velocity.y;
        // GRAVITY
        // if the pos is greater than the floor
        if (this.position.y + this.height < this.dimensions.height) {
            this.velocity.y -= CONSTANTS.GRAVITY;
        // else set the pos to the floor
        } else {
            this.velocity.y = 0
            this.position.y = this.dimensions.height - CONSTANTS.PLAYER_HEIGHT
            this.jumping = false
        }
    }

}
