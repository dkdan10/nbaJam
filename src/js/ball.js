const CONSTANTS = {
    RADIUS: 15
}

export default class Ball {
    constructor (dimensions) {
        this.radius = CONSTANTS.RADIUS
        this.dimensions = dimensions
        this.position = {
            x: this.dimensions.width / 2,
            y: this.dimensions.height / 2
        }
        this.color = "hotpink"
    }

    animate(ctx) {
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
}