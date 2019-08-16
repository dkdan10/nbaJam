import Player from './player'
import Court from './court';
import Hoop from './hoop';
import Ball from './ball';
import Scoreboard from './scoreboard';
import Player2 from './player2';
import MainMenu from './menu_screens/main_menu';

export default class NBAJamGame {
    constructor(canvas) {        
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.mainMenu = new MainMenu(this.dimensions, this.startGame.bind(this))
        this.playingGame = false;
        this.renderMenu()
    }

    showMenu() {
        this.mainMenu.setupKeyHandlers()
        this.renderMenu(this.ctx)
    }

    renderMenu () {
        this.mainMenu.render(this.ctx)
        if (!this.playingGame) requestAnimationFrame(this.renderMenu.bind(this));
    }

    startGame (leftSprite, rightSprite) {
        this.playingGame = true
        this.restart(leftSprite, rightSprite)
    }

    restart(leftSprite, rightSprite) {
        // START ANIMATION SYCLE
        this.court = new Court(this.dimensions);
        this.leftHoop = new Hoop(this.dimensions, "LEFT");
        this.rightHoop = new Hoop(this.dimensions, "RIGHT");
        this.ball = new Ball(this.dimensions, this.court, this.leftHoop, this.rightHoop)

        this.scoreboard = new Scoreboard(this.dimensions, this.leftHoop, this.rightHoop)

        this.player = new Player(this.court, this.ball, rightSprite);
        this.player2 = new Player2(this.court, this.ball, leftSprite);

        this.animate();
    }
    
    animate() {        
        // CREATES BACKGROUND
        this.ctx.fillStyle = "orange";
        this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
        
        // ANIMATE OBJECTS
        this.player.animate(this.ctx)
        this.player2.animate(this.ctx)
        this.ball.animate(this.ctx)
        this.leftHoop.animate(this.ctx)
        this.rightHoop.animate(this.ctx)
        
        this.scoreboard.animate(this.ctx)
        this.court.animate(this.ctx)
        
        if (this.gameOver()) {
            this.displayWinner()
        }
        // REQUEST NEXT FRAME
        if (this.playingGame) requestAnimationFrame(this.animate.bind(this));
    }



    gameOver () {
        return this.scoreboard.timeLeft === 0
    }

    displayWinner () {
        let text;
        if (this.rightHoop.score > this.leftHoop.score) {
            text = "Player 1 wins"
        } else if (this.leftHoop.score > this.rightHoop.score) {
            text = "Player 2 wins"
        } else {
            text = "Tie Game"
        }
        let loc = { x: this.dimensions.width / 2, y: this.dimensions.height / 2 }
        this.ctx.font = "bold 40pt serif";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText(`${text}`, loc.x, loc.y);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;
        this.ctx.strokeText(`${text}`, loc.x, loc.y);
        
        this.playingGame = false
        setTimeout(() => {
            this.showMenu()
        }, 2000);
    }

}