class PlayerArcher {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        };
        this.width = width;
        this.height = height;
        this.angle = -1.50;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        this.image = loadImage("./assets/playerArcher.png");
        World.add(world, this.body);
          
    }
    display() {
        var pos = this.body.position;
        if(keyIsDown(87) && this.angle > -1.77) {
            this.angle -= 0.1;
        }
        if(keyIsDown(83) && this.angle < -1.47) {
            this.angle += 0.1;
        }
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(this.angle);
        Matter.Body.setAngle(this.body, -PI / 2);
        image(this.image, 0, this.width / 2, this.width, this.height);
        pop();
    }
}