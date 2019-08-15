import key from '../utils/keymaster';

export default class CharacterSelect {
    constructor(dimensions, selectedCharacters) {
        this.dimensions = dimensions
        this.selectedCharacters = selectedCharacters
        this.leftSelected = 0
        this.rightSelected = 1
        this.characters = [
            { name: "Rodman", src: "src/assets/rodmanSmall.png"},
            { name: "Drake", src: "src/assets/drakeSmall.png" }
        ]
        
        this.leftChar = new Image();
        this.rightChar = new Image();
        this.leftChar.src = this.characters[this.leftSelected].src
        this.rightChar.src = this.characters[this.rightSelected].src
    }

    render(ctx) {
        this.leftChar.src = this.characters[this.leftSelected].src
        this.rightChar.src = this.characters[this.rightSelected].src

        ctx.fillStyle = "purple";
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);

        // LEFT SIDE
        const leftSideChar = this.characters[this.leftSelected]
        let loc = { x: this.dimensions.width / 4, y: this.dimensions.height / 2}
        ctx.font = "bold 40pt serif";
        ctx.textAlign = "center";
        ctx.fillStyle = "white";

        ctx.fillText(`${leftSideChar.name}`, loc.x, loc.y);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.strokeText(`${leftSideChar.name}`, loc.x, loc.y);
        ctx.drawImage(this.leftChar,
            loc.x - this.leftChar.width / 2,
            loc.y)

        // RIGHT SIDE
        const rightSideChar = this.characters[this.rightSelected]
        loc = { x: this.dimensions.width * 3 / 4, y: this.dimensions.height / 2 }
        ctx.font = "bold 40pt serif";
        ctx.textAlign = "center";
        ctx.fillStyle = "white";

        ctx.fillText(`${rightSideChar.name}`, loc.x, loc.y);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.strokeText(`${rightSideChar.name}`, loc.x, loc.y);
        ctx.drawImage(this.rightChar,
            loc.x - this.rightChar.width / 2,
            loc.y)

    }

    setupKeyHandlers() {

        setTimeout(() => {
            key('down', () => {
                this.rightSelected = (this.rightSelected + 1) % this.characters.length
            })
            key('up', () => {
                this.rightSelected = Math.abs((this.rightSelected - 1) % this.characters.length)
            })
            key('w', () => {
                this.leftSelected = (this.leftSelected + 1) % this.characters.length
            })
            key('s', () => {
                this.leftSelected = Math.abs((this.leftSelected - 1) % this.characters.length)
            })
            key('enter', () => {
                key.unbind('down')
                key.unbind('up')
                key.unbind('w')
                key.unbind('s')
                key.unbind('enter')
                this.selectedCharacters(this.characters[this.leftSelected].src, this.characters[this.rightSelected].src)
            })
        }, 100);

    }




}