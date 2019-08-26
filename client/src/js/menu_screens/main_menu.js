import key from '../utils/keymaster';
import CharacterSelect from './character_select';

export default class MainMenu {
    constructor (dimensions, startGame, startOnlineGame) {
        this.dimensions = dimensions
        this.startGame = startGame
        this.startOnlineGame = startOnlineGame
        this.selectedOption = 0
        this.options = ["Start Game", "Online"]
        this.characterSelect = new CharacterSelect(this.dimensions, this.selectedCharacters.bind(this))
        this.selectingCharacters = false
        this.setupKeyHandlers()
    }

    selectedCharacters (leftSrc, rightSrc, gameId) {
        this.selectingCharacters = false
        if (this.characterSelect.onlineMode) {
            this.characterSelect.onlineMode = false
            const mySide = this.characterSelect.isPlayingLeft ? "LEFT" : "RIGHT"
            this.startOnlineGame(leftSrc, rightSrc, mySide, gameId)
        } else {
            this.startGame(leftSrc, rightSrc)
        }
    }
    

    render (ctx) {
        ctx.fillStyle = "purple";
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
        if (!this.selectingCharacters) {
            this.options.forEach((option, i) => {
                const loc = { x: this.dimensions.width / 2, y: this.dimensions.height / ((this.options.length + 1) - i) }
                ctx.font = "bold 40pt serif";
                ctx.textAlign = "center";
                ctx.fillStyle = "white";

                const width = ctx.measureText(`${option}`).width

                if (this.selectedOption === i) ctx.fillRect((loc.x - width / 2) - 5, loc.y - 40, width + 10, 50);
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
            debugger
        })
        key('up', () => {
            this.selectedOption = Math.abs((this.selectedOption - 1) % this.options.length)
            debugger
        })
        key('enter', () => {
            debugger
            if (this.selectedOption === 0 && !this.selectingCharacters) {
                key.unbind('down')
                key.unbind('up')
                key.unbind('enter')
                this.selectingCharacters = true
                this.characterSelect.onlineMode = false
                this.characterSelect.setupKeyHandlers()
            } else if (this.selectedOption === 1 && !this.selectingCharacters) {
                key.unbind('down')
                key.unbind('up')
                key.unbind('enter')
                this.selectingCharacters = true
                this.characterSelect.onlineMode = true
                socket.emit('playerAddedToQueue', socket.id)
                this.characterSelect.setupKeyHandlers()
            }
        })

    }
    



}