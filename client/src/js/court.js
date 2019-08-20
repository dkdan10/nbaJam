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
        this.courtImage = new Image();
        this.courtImage.src = "src/assets/bballcourtsmall.png"
    }

    animate(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    //     ctx.drawImage(this.courtImage,
    //         this.position.x - this.courtImage.width / 12, 
    //         this.position.y - this.courtImage.height / 2,
    //         this.width + this.courtImage.width / 6,
    //         this.courtImage.height);
    }

}