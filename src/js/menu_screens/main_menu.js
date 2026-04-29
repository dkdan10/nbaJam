import key from '../utils/keymaster.js';
import CharacterSelect from './character_select.js';

export default class MainMenu {
    constructor (dimensions, startGame) {
        this.dimensions = dimensions
        this.startGame = startGame
        this.selectedOption = 0
        this.options = ["Start Game"]
        this.characterSelect = new CharacterSelect(this.dimensions, this.selectedCharacters.bind(this))
        this.selectingCharacters = false
        this.setupKeyHandlers()
    }

    selectedCharacters (leftSrc, rightSrc) {
        this.selectingCharacters = false
        this.startGame(leftSrc, rightSrc)
    }

    render (ctx) {
        ctx.fillStyle = "#1c2c55";
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
        const titleText = this.selectingCharacters ? "Character Select" : "NBA Jam Slam"
        ctx.font = this.selectingCharacters ? "bold 64pt 'Scoreboard'" : "bold 82pt 'Scoreboard'";
        ctx.textAlign = "center";
        ctx.fillStyle = "white";
        const titleLocation = 
            this.selectingCharacters ?
                { x: this.dimensions.width / 2, y: 0 + (80) }
            :
                { x: this.dimensions.width / 2, y: (this.dimensions.height / 2) - (80) }
        ctx.fillText(`${titleText}`, titleLocation.x, titleLocation.y)
        
        if (!this.selectingCharacters) {
            this.options.forEach((option, i) => {
                const loc = { x: (this.dimensions.width / 2), y: (this.dimensions.height / 2) + (60 * i) + 60 }
                ctx.font = "bold 40pt 'Scoreboard'";
                ctx.textAlign = "center";
                ctx.fillStyle = "white";

                const width = ctx.measureText(`${option}`).width

                if (this.selectedOption === i) ctx.fillRect((loc.x - width / 2) - 5, loc.y - 50, width + 10, 60);
                ctx.fillText(`${option}`, loc.x, loc.y);
                ctx.strokeStyle = "black";
                ctx.lineWidth = 2;
                ctx.strokeText(`${option}`, loc.x, loc.y);
            })
        } else if (this.selectingCharacters) {
            this.characterSelect.render(ctx)
        }
    }

    setupKeyHandlers() {
        key('down', () => {
            this.selectedOption = (this.selectedOption + 1) % this.options.length
        })
        key('up', () => {
            this.selectedOption = Math.abs((this.selectedOption - 1) % this.options.length)
        })
        key('enter', () => {
            key.unbind('down')
            key.unbind('up')
            key.unbind('enter')
            this.selectingCharacters = true
            this.characterSelect.setupKeyHandlers()
        })

    }
    



}
