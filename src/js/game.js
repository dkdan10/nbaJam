import Player from './player'
import Court from './court';
import Hoop from './hoop';
import Ball from './ball';


export default class NBAJamGame {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.restart();
    }

    restart() {
        // START ANIMATION SYCLE
        this.court = new Court(this.dimensions);
        this.leftHoop = new Hoop(this.dimensions, "LEFT");
        this.rightHoop = new Hoop(this.dimensions, "RIGHT");
        this.ball = new Ball(this.dimensions, this.court)

        this.player = new Player(this.court, this.ball);

        this.animate();
    }
    
    animate() {        
        // CREATES BACKGROUND
        this.ctx.fillStyle = "orange";
        this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    
        // ANIMATE OBJECTS
        this.player.animate(this.ctx)
        this.ball.animate(this.ctx)
        this.leftHoop.animate(this.ctx)
        this.rightHoop.animate(this.ctx)
        this.court.animate(this.ctx)

        // REQUEST NEXT FRAME
        requestAnimationFrame(this.animate.bind(this));
    }

}