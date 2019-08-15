import key from '../utils/keymaster';

export default class CharacterSelect {
    constructor(dimensions, startGame) {
        this.dimensions = dimensions
        this.startGame = startGame
        this.leftSelected = 0
        this.rightSelected = 1
        this.characters = [
            { name: "Rodman", src: "src/assets/rodmanSmall.png"},
            { name: "Drake", src: "src/assets/drakeSmall.png" }
        ]
        this.setupKeyHandlers()

        this.leftChar = new Image();
        this.rightChar = new Image();
        this.leftChar.src = this.characters[this.leftSelected].src
        this.rightChar.src = this.characters[this.leftSelected].src
    }

    render(ctx) {
        this.leftChar.src = this.characters[this.leftSelected].src
        this.rightChar.src = this.characters[this.leftSelected].src
        
        ctx.fillStyle = "purple";
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);

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
    }

    setupKeyHandlers() {
        key('down', () => {
            this.rightSelected = (this.rightSelected + 1) % this.options.length
        })
        key('up', () => {
            this.rightSelected = Math.abs((this.rightSelected - 1) % this.options.length)
        })
        key('w', () => {
            this.leftSelected = (this.leftSelected + 1) % this.options.length
        })
        key('s', () => {
            this.leftSelected = Math.abs((this.leftSelected - 1) % this.options.length)
        })
        key('enter', () => {
            if (this.selectedOption === 0) {
                key.unbind('down')
                key.unbind('up')
                key.unbind('enter')
                this.startGame()
            }
        })

    }




}