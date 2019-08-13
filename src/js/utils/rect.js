export default class Rect {
    constructor(size) {
        this.width = size.width;
        this.height = size.height;
    }

    isOverlappingOtherRect(rectClass) {
        const myBounds = this.getBounds()
        const rect = rectClass.getBounds()
        if (myBounds.left > rect.right || myBounds.right < rect.left) {
            return false;
        }
        if (myBounds.top > rect.bottom || myBounds.bottom < rect.top) {
            return false;
        }
        return true;
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