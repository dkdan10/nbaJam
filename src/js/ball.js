import Circle from "./utils/circle";

const CONSTANTS = {
    RADIUS: 15,
    GRAVITY: 0.5,
    BOUNCE_RETENTION: 0.6,
    DRIBBLE_SPEED: 3,
}

export default class Ball extends Circle {
    constructor (dimensions, court, leftHoop, rightHoop) {
        super(CONSTANTS.RADIUS)
        this.court = court
        this.dimensions = dimensions
        this.leftHoop = leftHoop
        this.rightHoop = rightHoop
        this.leftHoop.ball = this
        this.rightHoop.ball = this

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
        this.power = 0
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
        if (!this.noTouch[player.color]) this.possession = player
    }


    shoot () {
        // BETA SHOOTING

        // this.power += 1
        // const shootingPlayer = this.possession
        // this.position.x = shootingPlayer.facingRight ?
        //     (shootingPlayer.position.x + shootingPlayer.width + this.radius) :
        //     (shootingPlayer.position.x - this.radius)
        // this.position.y = shootingPlayer.position.y

        // if (this.shootingInterval && this.power < 60) {
        //     clearTimeout(this.shootingInterval)
        // }
        // if (this.power < 60) {
        //     this.shootingInterval = setTimeout(() => {

        
        //         this.velocity.x = shootingPlayer.facingRight ? 6 : -6
        //         this.velocity.y = this.power
        //         this.possession = null
        
        //         this.noTouch[shootingPlayer.color] = true        
        //         setTimeout(() => {
        //             this.noTouch[shootingPlayer.color] = false
        //         }, 500);
        //         this.power = 0
        //     }, 20);
        // }

        // AIMBOT SHOOTING

        // const shootingPlayer = this.possession
        // this.position.x = shootingPlayer.facingRight ?
        //     (shootingPlayer.position.x + shootingPlayer.width + this.radius) :
        //     (shootingPlayer.position.x - this.radius)
        // this.position.y = shootingPlayer.position.y

        // const scorePosition = shootingPlayer.facingRight ? (
        //     {
        //         x: this.rightHoop.scoreHitbox.position.x + (this.rightHoop.scoreHitbox.width / 2),
        //         y: this.rightHoop.scoreHitbox.position.y
        //     }
        // ) : (
        //     {
        //         x: this.leftHoop.scoreHitbox.position.x + (this.rightHoop.scoreHitbox.width / 2),
        //         y: this.leftHoop.scoreHitbox.position.y
        //     }

        // )

        // const numberOfFrames = 50

        // const velocityX = (scorePosition.x - this.position.x) / numberOfFrames
        // const velocityY = ( (-scorePosition.y + this.position.y) - 0.5 * -CONSTANTS.GRAVITY * (numberOfFrames * numberOfFrames) ) / numberOfFrames
        
        // this.velocity = {
        //     x: velocityX,
        //     y: velocityY
        // }

        // this.noTouch[shootingPlayer.color] = true        
        // setTimeout(() => {
        //     this.noTouch[shootingPlayer.color] = false
        // }, 500);

        // this.possession = null

        // POWERBASED AIMED SHOOTING

        this.power += 1

        const shootingPlayer = this.possession
        this.position.x = shootingPlayer.facingRight ?
            (shootingPlayer.position.x + shootingPlayer.width + this.radius) :
            (shootingPlayer.position.x - this.radius)
        this.position.y = shootingPlayer.position.y

        if (this.shootingTimeout && this.power < 60) {
            clearTimeout(this.shootingTimeout)
        }
        if (this.power < 60) {
            this.shootingTimeout = setTimeout(() => {
                this.releaseBall()
            }, 20);
        }

    }

    releaseBall () {
        const shootingPlayer = this.possession

        const scorePosition = shootingPlayer.facingRight ? (
            {
                x: this.rightHoop.scoreHitbox.position.x + (this.rightHoop.scoreHitbox.width / 2),
                y: this.rightHoop.scoreHitbox.position.y
            }
        ) : (
            {
                x: this.leftHoop.scoreHitbox.position.x + (this.rightHoop.scoreHitbox.width / 2),
                y: this.leftHoop.scoreHitbox.position.y
            }
        )

        const numberOfFrames = 50

        const velocityX = (scorePosition.x - this.position.x) / numberOfFrames
        const velocityY = ((-scorePosition.y + this.position.y) - 0.5 * -CONSTANTS.GRAVITY * (numberOfFrames * numberOfFrames)) / numberOfFrames

        this.velocity = {
            x: velocityX,
            y: velocityY
        }

        this.noTouch[shootingPlayer.color] = true
        setTimeout(() => {
            this.noTouch[shootingPlayer.color] = false
        }, 500);

        this.power = 0
        this.possession = null
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