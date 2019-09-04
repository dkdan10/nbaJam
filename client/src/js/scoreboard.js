export default class Scoreboard {
    constructor(dimensions, leftHoop, rightHoop) {
        this.dimensions = dimensions
        this.leftHoop = leftHoop
        this.rightHoop = rightHoop
        this.timeLeft = 60
        this.countDown = setInterval(() => { 
            this.timeLeft--
            if (this.timeLeft === 0) clearInterval(this.countDown)
        }, 1000);
    }

    animate (ctx) {
        const leftNameLoc = { x: this.dimensions.width / 3, y: this.dimensions.height / 10}
        ctx.font = "bold 22pt 'Scoreboard'";
        ctx.fillStyle = "white";
        ctx.textAlign = "center"; 
        ctx.fillText(`Player 1`, leftNameLoc.x, leftNameLoc.y);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.strokeText(`Player 1`, leftNameLoc.x, leftNameLoc.y);

        const leftScoreLoc = { x: this.dimensions.width / 3, y: this.dimensions.height / 5 }
        ctx.font = "bold 40pt 'Scoreboard'";
        ctx.fillStyle = "red";
        ctx.textAlign = "center"; 
        ctx.fillText(`${this.rightHoop.score}`, leftScoreLoc.x, leftScoreLoc.y);
        ctx.strokeStyle = "red";
        ctx.lineWidth = 1;
        ctx.strokeText(`${this.rightHoop.score}`, leftScoreLoc.x, leftScoreLoc.y);

        const timeLeftLoc = { x: this.dimensions.width / 2, y: this.dimensions.height / 5 }
        ctx.font = "bold 64pt 'Scoreboard'";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(`${this.timeLeft}`, timeLeftLoc.x, timeLeftLoc.y);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.strokeText(`${this.timeLeft}`, timeLeftLoc.x, timeLeftLoc.y);

        const rightNameLoc = { x: this.dimensions.width * 2 / 3, y: this.dimensions.height / 10 }
        ctx.font = "bold 22pt 'Scoreboard'";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(`Player 2`, rightNameLoc.x, rightNameLoc.y);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.strokeText(`Player 2`, rightNameLoc.x, rightNameLoc.y);

        const rightScoreLoc = { x: this.dimensions.width * 2 / 3, y: this.dimensions.height / 5 }
        ctx.font = "bold 40pt 'Scoreboard'";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText(`${this.leftHoop.score}`, rightScoreLoc.x, rightScoreLoc.y);
        ctx.strokeStyle = "red";
        ctx.lineWidth = 1;
        ctx.strokeText(`${this.leftHoop.score}`, rightScoreLoc.x, rightScoreLoc.y);



        // let loc = { x: this.dimensions.width / 2, y: this.dimensions.height / 10 }
        // ctx.font = "bold 40pt 'Scoreboard'";
        // ctx.fillStyle = "white";
        // ctx.textAlign = "center"; 
        // ctx.fillText(`Player 1: ${this.rightHoop.score} Player 2: ${this.leftHoop.score}`, loc.x, loc.y);
        // ctx.strokeStyle = "black";
        // ctx.lineWidth = 2;
        // ctx.strokeText(`Player 1: ${this.rightHoop.score} Player 2: ${this.leftHoop.score}`, loc.x, loc.y);

        // loc = { x: this.dimensions.width / 2, y: this.dimensions.height / 5 }
        // ctx.fillStyle = "white";
        // ctx.textAlign = "center";
        // ctx.fillText(`${this.timeLeft}`, loc.x, loc.y);
        // ctx.strokeStyle = "black";
        // ctx.lineWidth = 2;
        // ctx.strokeText(`${this.timeLeft}`, loc.x, loc.y);
    }
}