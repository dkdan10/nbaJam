import Rect from "./utils/rect";

const CONSTANTS = {
    COURT_FLOOR: 0.85,
    COURT_WIDTH: 5,
    HOOP_Y_MULTIPLIER: 0.3,
    HOOP_HEIGHT: 40,
    HOOP_WIDTH: 50,
    HOOP_X_DISTANCE: 50,
    BACKBOARD_WIDTH: 15,
    BACKBOARD_HEIGHT: 50
};

export default class Court extends Rect {
    constructor(dimensions, backgroundCavas) {
        super({ width: dimensions.width, height: CONSTANTS.COURT_WIDTH })
        this.dimensions = dimensions
        this.position = {
            x: 0,
            y: dimensions.height * CONSTANTS.COURT_FLOOR
        }
        this.hoopLeftPosition = {
            x: 0 + CONSTANTS.HOOP_X_DISTANCE - 6,
            y: dimensions.height * CONSTANTS.HOOP_Y_MULTIPLIER
        }
        this.hoopRightPosition = {
            x: dimensions.width - CONSTANTS.HOOP_X_DISTANCE - CONSTANTS.HOOP_WIDTH - CONSTANTS.BACKBOARD_WIDTH,
            y: dimensions.height * CONSTANTS.HOOP_Y_MULTIPLIER
        }
        this.leftHoopImage = new Image();
        this.rightHoopImage = new Image();
        this.leftHoopImage.src = "src/assets/cartoonHoopLeft.png"
        this.rightHoopImage.src = "src/assets/cartoonHoopRight.png"


        this.standsImage = new Image();
        this.standsImage.src = "src/assets/basketball-stands.png"

        this.color = "green"
        this.courtImage = new Image();
        this.courtImage.src = "src/assets/bballcourtsmall.png"
        this.setupBackgroundCourt(backgroundCavas)
    }  

    setupBackgroundCourt(canvas) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "orange";
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.courtImage.onload = () => {
            ctx.drawImage(this.courtImage,
                this.position.x - this.courtImage.width / 12, 
                this.position.y - this.courtImage.height / 2,
                this.width + this.courtImage.width / 6,
                this.courtImage.height);
        }
        this.standsImage.onload = () => {
            ctx.drawImage(this.standsImage,
                0,
                0,
                this.standsImage.width, this.standsImage.height)
            ctx.drawImage(this.leftHoopImage,
                this.hoopLeftPosition.x,
                this.hoopLeftPosition.y - (CONSTANTS.HOOP_HEIGHT + 5),
                CONSTANTS.HOOP_WIDTH + CONSTANTS.BACKBOARD_WIDTH + 10,
                CONSTANTS.HOOP_HEIGHT + CONSTANTS.BACKBOARD_HEIGHT)
            ctx.drawImage(this.rightHoopImage,
                this.hoopRightPosition.x,
                this.hoopRightPosition.y - (CONSTANTS.HOOP_HEIGHT + 5),
                CONSTANTS.HOOP_WIDTH + CONSTANTS.BACKBOARD_WIDTH + 10,
                CONSTANTS.HOOP_HEIGHT + CONSTANTS.BACKBOARD_HEIGHT)
        }
        this.leftHoopImage.onload = () => {
            ctx.drawImage(this.leftHoopImage,
                this.hoopLeftPosition.x,
                this.hoopLeftPosition.y - (CONSTANTS.HOOP_HEIGHT + 5),
                CONSTANTS.HOOP_WIDTH + CONSTANTS.BACKBOARD_WIDTH + 10,
                CONSTANTS.HOOP_HEIGHT + CONSTANTS.BACKBOARD_HEIGHT)
        }
        this.rightHoopImage.onload = () => {
            ctx.drawImage(this.rightHoopImage,
                this.hoopRightPosition.x,
                this.hoopRightPosition.y - (CONSTANTS.HOOP_HEIGHT + 5),
                CONSTANTS.HOOP_WIDTH + CONSTANTS.BACKBOARD_WIDTH + 10,
                CONSTANTS.HOOP_HEIGHT + CONSTANTS.BACKBOARD_HEIGHT)
        }


    }

    animate(ctx) {
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    //     ctx.drawImage(this.courtImage,
    //         this.position.x - this.courtImage.width / 12, 
    //         this.position.y - this.courtImage.height / 2,
    //         this.width + this.courtImage.width / 6,
    //         this.courtImage.height);
    }

}