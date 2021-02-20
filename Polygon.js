class Polygon {
    constructor(x, y, radius){
        var options = {
            density: 2,
            restitution: 0.4
        }
        //polygon holder with slings
        this.image = loadImage("polygon.png");
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
    }
    display() {
        push();
        imageMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        image(this.image, 0, 0, 50, 50);
        pop();
    }
}