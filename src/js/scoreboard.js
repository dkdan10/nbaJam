export default class Scoreboard {
    constructor(dimensions, leftHoop, rightHoop) {
        this.dimensions = dimensions
        this.leftHoop = leftHoop
        this.rightHoop = rightHoop
    }

    animate (ctx) {
        const loc = { x: this.dimensions.width / 4, y: this.dimensions.height / 10 }
        ctx.font = "bold 40pt serif";
        ctx.fillStyle = "white";
        ctx.fillText(`Player 1: ${this.leftHoop.score} Player 2: ${this.rightHoop.score}`, loc.x, loc.y);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.strokeText(`Player 1: ${this.leftHoop.score} Player 2: ${this.rightHoop.score}`, loc.x, loc.y);
    }
}