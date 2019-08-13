import Player from './player'

export default class NBAJamGame {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.restart();
    }

    restart() {
        // START ANIMATION SYCLE
        this.player = new Player(this.dimensions);

        this.animate();
    }
    
    animate() {        
        // CREATES BACKGROUND
        this.ctx.fillStyle = "orange";
        this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    
        this.player.animate(this.ctx)
        // Animte
        requestAnimationFrame(this.animate.bind(this));
    }

}