import Circle from "./utils/circle";

const CONSTANTS = {
    RADIUS: 15,
    GRAVITY: 0.5,
    BOUNCE_RETENTION: 0.8
}

export default class Ball extends Circle {
    constructor (dimensions, court) {
        super(CONSTANTS.RADIUS)
        this.court = court
        this.dimensions = dimensions
        this.position = {
            x: this.court.width / 2,
            y: this.dimensions.height / 2
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.color = "hotpink"
        this.possession = null
    }

    animate(ctx) {
        this.move();
        ctx.beginPath();
        ctx.arc(
            this.position.x, 
            this.position.y, 
            this.radius, 
            0, 
            Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    move() {

        if (!this.possession) {
            this.position.y -= this.velocity.y;
            // GRAVITY
            // if the pos is greater than the floor
            if (this.position.y + this.radius - this.court.height < this.court.position.y + this.court.height / 2) {
                this.velocity.y -= CONSTANTS.GRAVITY;
                // else set the reverse velocity
            } else {
                this.velocity.y = -this.velocity.y * CONSTANTS.BOUNCE_RETENTION
            }
        } else {
            this.position.x = this.possession.facingRight ? (
                this.possession.position.x + this.possession.width) : (this.possession.position.x)

            // DRIBBLING
            this.position.y = this.possession.position.y + this.possession.height / 2
        }
    }
}