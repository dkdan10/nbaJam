export default class Scoreboard {
    constructor(dimensions, leftHoop, rightHoop) {
        this.dimensions = dimensions
        this.leftHoop = leftHoop
        this.rightHoop = rightHoop
        this.timeLeft = 10
        this.countDown = setInterval(() => { 
            this.timeLeft--
            if (this.timeLeft === 0) clearInterval(this.countDown)
        }, 1000);
    }

    animate (ctx) {
        let loc = { x: this.dimensions.width / 2, y: this.dimensions.height / 10 }
        ctx.font = "bold 40pt serif";
        ctx.fillStyle = "white";
        ctx.textAlign = "center"; 
        ctx.fillText(`Player 1: ${this.rightHoop.score} Player 2: ${this.leftHoop.score}`, loc.x, loc.y);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.strokeText(`Player 1: ${this.rightHoop.score} Player 2: ${this.leftHoop.score}`, loc.x, loc.y);

        loc = { x: this.dimensions.width / 2, y: this.dimensions.height / 5 }
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(`${this.timeLeft}`, loc.x, loc.y);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.strokeText(`${this.timeLeft}`, loc.x, loc.y);
    }
}