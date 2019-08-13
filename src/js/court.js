import Rect from "./utils/rect";

const CONSTANTS = {
    COURT_FLOOR: 0.85,
    COURT_WIDTH: 5
};

export default class Court extends Rect {
    constructor(dimensions) {
        super({ width: dimensions.width, height: CONSTANTS.COURT_WIDTH })
        this.position = {
            x: 0,
            y: dimensions.height * CONSTANTS.COURT_FLOOR
        }
        this.color = "green"
    }

    animate(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

}