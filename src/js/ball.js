import Circle from "./utils/circle";

const CONSTANTS = {
    RADIUS: 15,
    GRAVITY: 0.5,
    BOUNCE_RETENTION: 0.6,
    DRIBBLE_SPEED: 3
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
        this.noTouch = {}
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
    claimPossession(player) {
        if (!this.noTouch[player]) this.possession = player
    }


    shoot () {
        const shootingPlayer = this.possession
        this.position.x = shootingPlayer.facingRight ? 
            (shootingPlayer.position.x + shootingPlayer.width + this.radius) :
            (shootingPlayer.position.x - this.radius)
        this.position.y = shootingPlayer.position.y - this.radius

        this.velocity.x = shootingPlayer.facingRight ? 6 : -6
        this.velocity.y = 15
        this.possession = null

        this.noTouch[shootingPlayer] = true        
        setTimeout(() => {
            this.noTouch[shootingPlayer] = false
        }, 500);

    }

    move() {

        if (!this.possession) {
            this.fall()
            
        } else {
            this.moveWithPlayerPossession() 
        }

        this.checkBounds()
    }

    moveWithPlayerPossession() {
        this.position.x = this.possession.facingRight ?
            (this.possession.position.x + this.possession.width) : (this.possession.position.x)

        if (this.possession.jumping) {
            // HOLD BALL
            this.position.y = this.possession.position.y + this.possession.height / 2

        } else {
            // DRIBBLING
            if (this.position.y < this.possession.position.y + this.possession.height / 2) {
                this.velocity.y = -CONSTANTS.DRIBBLE_SPEED
            } else if (this.position.y > this.possession.position.y + this.possession.height - this.radius) {
                this.velocity.y = CONSTANTS.DRIBBLE_SPEED
            }
            this.position.y -= this.velocity.y
        }
    }


    fall () {
        this.position.y -= this.velocity.y;
        this.position.x += this.velocity.x;
        // GRAVITY
        // if the pos is greater than the floor
        if (this.position.y + this.radius < this.court.position.y) {
            this.velocity.y -= CONSTANTS.GRAVITY;
            // else set the reverse velocity
        } else if (this.velocity.y < 0) {
            this.velocity.y = -this.velocity.y * CONSTANTS.BOUNCE_RETENTION
        }
    }


    checkBounds() {
        if (this.position.x > this.court.width - this.radius) {
            this.position.x = this.court.width - this.radius
            this.velocity.x = -this.velocity.x
        } else if (this.position.x < 0) {
            this.position.x = 0
            this.velocity.x = -this.velocity.x
        }
    }

}