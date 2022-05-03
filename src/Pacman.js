const angleToRad = (angle) => (angle * Math.PI) / 180;

class Pacman {
    constructor(initialPos, color = "yellow", maxSpeed = 10) {
        this.pacmanSize = 10;
        this.mouthOpen = 20;
        this.origin = { x: initialPos.x, y: initialPos.y };
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.speed = { x: maxSpeed, y: 0 };
    }
    update() {
        this.mouthOpen += 0.8;
        let newPosX = this.origin.x + this.speed.x;
        let newPosY = 0;
        if (newPosX < 500 && newPosX >= 0) {
            this.origin.x = newPosX;
        }
    }
    keyboard_event(key) {
        switch (key) {
            case `ArrowRight`:
                console.log("right");
                this.speed.x = this.maxSpeed;
                break;
            case `ArrowLeft`:
                console.log("left");
                this.speed.x = -this.maxSpeed;
                break;
            case `ArrowUp`:
                console.log("up");
                break;
            case `ArrowDown`:
                console.log("down");
                break;
        }
    }
    draw(ctx) {
        let origin = this.origin;
        let pacmanSize = this.pacmanSize;
        let mouthOpen = this.mouthOpen;

        let open = 20 * Math.sin(10 * this.mouthOpen) + 20;

        // Controlamos la dirección del PACMAN
        let direction = 0;
        if (this.speed.x != 0 && this.speed.x < 0) {
            direction = 180
        }

        ctx.strokeStyle = "black";
        ctx.fillStyle = this.color;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(origin.x, origin.y);
        ctx.arc(origin.x, origin.y, pacmanSize, angleToRad(-open + direction), angleToRad(open + direction), true);
        // ctx.lineTo(origin.x + pacmanSize, origin.y + mouthOpen);
        // ctx.moveTo(origin.x, origin.y);
        // ctx.lineTo(origin.x + pacmanSize, origin.y - mouthOpen);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
}