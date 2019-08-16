import key from '../utils/keymaster';

export default class CharacterSelect {
    constructor(dimensions, selectedCharacters) {
        this.dimensions = dimensions
        this.selectedCharacters = selectedCharacters
        this.leftSelected = 0
        this.rightSelected = 1
        this.characters = [
            { name: "Rodman", src: "src/assets/rodmanSmall.png"},
            { name: "Drake", src: "src/assets/drakeSmall.png" },
            { name: "Lebron", src: "src/assets/lebronSmall.png" },
            { name: "Peach", src: "src/assets/peachSmall.png"}
        ]
        
        this.leftChar = new Image();
        this.rightChar = new Image();
        this.leftChar.src = this.characters[this.leftSelected].src
        this.rightChar.src = this.characters[this.rightSelected].src

        this.leftReady = false
        this.rightReady = false

        socket.on("matchFound", data => {
            this.leftPlayerId = data["leftPlayerId"]
            this.rightPlayerId = data["rightPlayerId"]
            if (socket.id === this.leftPlayerId) {
                this.isPlayingLeft = true
            } else {
                this.isPlayingRight = true
            }
            this.leftSelected = 0
            this.rightSelected = 1
            this.gameId = data["gameId"]
        })

        socket.on("updatedSelectedChars", data => {
            this.leftSelected = data["leftSelected"]
            this.rightSelected = data["rightSelected"]
        })

        socket.on("updatedLeftReady", () => {
            this.leftReady = true
        })
        socket.on("updatedRightReady", () => {
            this.rightReady = true
        })

        socket.on("startGame", () => {
            key.unbind('down')
            key.unbind('up')
            key.unbind('w')
            key.unbind('s')
            key.unbind('enter')
            this.selectedCharacters(this.characters[this.leftSelected].src, this.characters[this.rightSelected].src, this.gameId)
            this.leftPlayerId = ""
            this.rightPlayerId = ""
            this.leftSelected = 0
            this.rightSelected = 1
            this.leftReady = false
            this.rightReady = false
            this.gameId = null
        })
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

        if (this.onlineMode) ctx.fillText("Online Mode", loc.x, loc.y - 100)
        ctx.font = "bold 12pt serif";
        if (this.leftReady) ctx.fillText("Ready", loc.x, loc.y - 70)
        if (this.leftPlayerId && this.rightPlayerId) {
            ctx.fillText(`${this.leftPlayerId}`, loc.x, loc.y - 50)
        } else if (this.onlineMode) {
            ctx.fillText(`${socket.id}`, loc.x, loc.y - 50)
        }

        ctx.font = "bold 40pt serif";
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

        if (this.onlineMode) ctx.fillText("Online Mode", loc.x, loc.y - 100)
        ctx.font = "bold 12pt serif";
        if (this.rightReady) ctx.fillText("Ready", loc.x, loc.y - 70)
        if (this.leftPlayerId && this.rightPlayerId) {
            ctx.fillText(`${this.rightPlayerId}`, loc.x, loc.y - 50)
        } else if (this.onlineMode) {
            ctx.fillText(`Waiting for Player`, loc.x, loc.y - 50)
        }
        ctx.font = "bold 40pt serif";

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
            if (!this.onlineMode) {
                key('down', () => {
                    this.rightSelected = (this.rightSelected + 1) % this.characters.length
                })
                key('up', () => {
                    this.rightSelected = (this.rightSelected - 1)
                    if (this.rightSelected === -1) this.rightSelected = this.characters.length - 1
                })
                key('w', () => {
                    this.leftSelected = (this.leftSelected + 1) % this.characters.length
    
                })
                key('s', () => {
                    this.leftSelected = (this.leftSelected - 1) % this.characters.length
                    if (this.leftSelected === -1) this.leftSelected = this.characters.length - 1
    
                })
                key('enter', () => {
                    key.unbind('down')
                    key.unbind('up')
                    key.unbind('w')
                    key.unbind('s')
                    key.unbind('enter')
                    this.selectedCharacters(this.characters[this.leftSelected].src, this.characters[this.rightSelected].src)
                })
            } else {

                key('up', () => {
                    if (this.isPlayingLeft) {
                        this.leftSelected = (this.leftSelected + 1) % this.characters.length
                        socket.emit('charChanged', {
                            rightSelected: this.rightSelected,
                            leftSelected: this.leftSelected,
                            gameId: this.gameId
                        })
                    } else if (this.isPlayingRight) {
                        this.rightSelected = (this.rightSelected - 1)
                        if (this.rightSelected === -1) this.rightSelected = this.characters.length - 1
                        socket.emit('charChanged', {
                            rightSelected: this.rightSelected,
                            leftSelected: this.leftSelected,
                            gameId: this.gameId
                        })
                    }
                })
                key('down', () => {
                    if (this.isPlayingLeft) {
                        this.leftSelected = (this.leftSelected - 1) % this.characters.length
                        if (this.leftSelected === -1) this.leftSelected = this.characters.length - 1
                        socket.emit('charChanged', {
                            rightSelected: this.rightSelected,
                            leftSelected: this.leftSelected,
                            gameId: this.gameId
                        })
                    } else if (this.isPlayingRight) {
                        this.rightSelected = (this.rightSelected + 1) % this.characters.length
                        socket.emit('charChanged', {
                            rightSelected: this.rightSelected,
                            leftSelected: this.leftSelected,
                            gameId: this.gameId
                        })
                    }
                })

                key('enter', () => {
                    if (this.isPlayingLeft) {
                        socket.emit('leftReady', {
                            gameId: this.gameId
                        })
                    } else if (this.isPlayingRight) {
                        socket.emit('rightReady', {
                            gameId: this.gameId
                        })
                    }
                })


            }
        }, 100);
    }




}