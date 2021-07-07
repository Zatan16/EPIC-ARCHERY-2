class ComputerArcher {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        };
        this.width = width;
        this.height = height;
        this.angle = 1.50;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        this.image = loadImage("./assets/computerArcher.png");
        World.add(world, this.body);
          
    }
    display() {
        if(keyIsDown(UP_ARROW) && this.angle < 1.77) {
            this.angle += 0.1;
        }
        if(keyIsDown(DOWN_ARROW) && this.angle > 1.47) {
            this.angle -= 0.1;
        }
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(this.angle);
        Matter.Body.setAngle(this.body, -PI / 2);
        image(this.image, 0, this.width / 2, this.width, this.height);
        pop();
    }
}