import Player from "./player";

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

}

