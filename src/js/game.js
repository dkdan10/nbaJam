import Player from './player'
import Court from './court';

export default class NBAJamGame {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.restart();
    }

    restart() {
        // START ANIMATION SYCLE
        this.court = new Court(this.dimensions);
        this.player = new Player(this.dimensions, this.court);

        this.animate();
    }
    
    animate() {        
        // CREATES BACKGROUND
        this.ctx.fillStyle = "orange";
        this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    
        // ANIMATE OBJECTS
        this.player.animate(this.ctx)
        this.court.animate(this.ctx)

        // REQUEST NEXT FRAME
        requestAnimationFrame(this.animate.bind(this));
    }

}