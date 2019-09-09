import Rect from './utils/rect'

const CONSTANTS = {
    HOOP_Y_MULTIPLIER: 0.3,
    HOOP_HEIGHT: 40,
    HOOP_WIDTH: 50,
    HOOP_X_DISTANCE: 50,
    BACKBOARD_WIDTH: 15,
    BACKBOARD_HEIGHT: 50,
}


export default class Hoop extends Rect {
    constructor(dimensions, hoopSide, onlineGameId) {
        super({ width: CONSTANTS.HOOP_WIDTH, height: CONSTANTS.HOOP_HEIGHT })
        // this.ball = ball
        this.dimensions = dimensions
        this.hoopSide = hoopSide
        this.onlineGameId = onlineGameId

        const x = hoopSide === "LEFT" ? (
                0 + CONSTANTS.HOOP_X_DISTANCE
            ) : (
                dimensions.width - CONSTANTS.HOOP_X_DISTANCE - this.width
            )
        this.position = {
            x: x, 
            y: dimensions.height * CONSTANTS.HOOP_Y_MULTIPLIER
        }
        this.backboard = new Backboard(this, hoopSide)
        this.scoreHitbox = new ScoreHitbox(this, hoopSide)
        this.color = "purple"
        this.score = 0
        this.justScored = false

        this.hoopLeftScored = new Image();
        this.hoopLeftScored.src = "src/assets/hoopLeftScored.png"
        this.hoopRightScored = new Image();
        this.hoopRightScored.src = "src/assets/hoopRightScored.png"
    }

    animate(ctx) {
        this.checkBallCollision()
        // this.backboard.animate(ctx)
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        // this.scoreHitbox.animate(ctx)
        if (this.ball.isOverlappingRect(this.scoreHitbox)) {
            if (!this.justScored && this.onlineGameId) {
                socket.emit("updateScore", {
                    gameId: this.onlineGameId,
                    addToHoop: this.hoopSide
                })
            } else if (!this.justScored) { 
                this.score += 2
            }
            this.justScored = true
            if (this.hoopSide === "LEFT") {
                ctx.drawImage(this.hoopLeftScored,
                    this.position.x - 5,
                    this.position.y - (CONSTANTS.HOOP_HEIGHT + 5),
                    CONSTANTS.HOOP_WIDTH + CONSTANTS.BACKBOARD_WIDTH + 10,
                    CONSTANTS.HOOP_HEIGHT + CONSTANTS.BACKBOARD_HEIGHT
                )
            } else if (this.hoopSide === "RIGHT") {
                ctx.drawImage(this.hoopRightScored,
                    this.position.x - 15,
                    this.position.y - (CONSTANTS.HOOP_HEIGHT + 5),
                    CONSTANTS.HOOP_WIDTH + CONSTANTS.BACKBOARD_WIDTH + 10,
                    CONSTANTS.HOOP_HEIGHT + CONSTANTS.BACKBOARD_HEIGHT
                )
            }
            this.color = "green"
            setTimeout(() => {
                this.justScored = false
                this.color = "purple"
            }, 1000);
            
        }
    }

    checkBallCollision () {
        if (this.ball.isOverlappingRect(this) || this.ball.isOverlappingRect(this.backboard)) {
            if (this.ball.position.y - this.ball.radius > this.position.y) {
                if (this.ball.velocity.y > 0) this.ball.velocity.y = -this.ball.velocity.y
            } else {
                if (this.ball.position.y + this.ball.radius < this.backboard.position.y && this.ball.velocity.y < 0)  {
                    this.ball.velocity.y = -this.ball.velocity.y
                }
                this.ball.velocity.x = -this.ball.velocity.x
            }
        }
    }

}

class ScoreHitbox extends Rect {
    constructor(hoop, hoopSide) {
        super({ width: CONSTANTS.HOOP_WIDTH - 30, height: CONSTANTS.HOOP_HEIGHT * 0.05 })
        const x = hoopSide === "LEFT" ? (
            hoop.position.x + 15
        ) : (
            hoop.position.x + hoop.width - this.width - 15
        )
        this.position = {
            x: x,
            y: hoop.position.y
        }
        this.color = "white"
    }

    animate(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

class Backboard extends Rect {
    constructor(hoop, hoopSide) {
        super({ width: CONSTANTS.BACKBOARD_WIDTH, height: CONSTANTS.BACKBOARD_HEIGHT })
        const x = hoopSide === "LEFT" ? (
            hoop.position.x 
        ) : (
            hoop.position.x + hoop.width - this.width
        )
        this.position = {
            x: x,
            y: hoop.position.y - this.height
        }
        this.color = "aqua"
    }

    animate(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}