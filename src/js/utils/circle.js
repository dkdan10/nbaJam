export default class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    isOverlappingRect(rect) {
        const distX = Math.abs(this.position.x - rect.position.x - rect.width / 2);
        const distY = Math.abs(this.position.y - rect.position.y - rect.height / 2);
        if (distX > (rect.width / 2 + this.radius)) { return false; }
        if (distY > (rect.height / 2 + this.radius)) { return false; }

        if (distX <= (rect.width / 2)) { return true; }
        if (distY <= (rect.height / 2)) { return true; }

        const dx = distX - rect.width / 2;
        const dy = distY - rect.height / 2;
        return (dx * dx + dy * dy <= (this.radius * this.radius));
    }

    getBounds() {
        return {
            left: this.position.x,
            right: this.position.x + this.width,
            top: this.position.y,
            bottom: this.position.y + this.height
        };
    }

}