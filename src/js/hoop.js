import Rect from './utils/rect'

const CONSTANTS = {
    HOOP_Y_MULTIPLIER: 0.3,
    HOOP_HEIGHT: 40,
    HOOP_WIDTH: 40,
    HOOP_X_DISTANCE: 50
}


export default class Hoop extends Rect {
    constructor(dimensions, hoop) {
        super({ width: CONSTANTS.HOOP_WIDTH, height: CONSTANTS.HOOP_HEIGHT })
        this.dimensions = dimensions
        const x = hoop === "LEFT" ? (
                0 + CONSTANTS.HOOP_X_DISTANCE
            ) : (
                dimensions.width - CONSTANTS.HOOP_X_DISTANCE - this.width
            )
        this.position = {
            x: x, 
            y: dimensions.height * CONSTANTS.HOOP_Y_MULTIPLIER
        }
        this.color = "purple"
    }

    animate(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

}