class Box {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    var options = {
      restitution: 0.5,
      friction: 0.2,
      density: 0.15
    }
    this.width = width
    this.height = height
    this.Visibility = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
  }
  display() {
    if(this.body.speed < 3){
      super.display();
     }
     else{
       World.remove(world, this.body);
    push();
    rectMode(CENTER);
    fill("red");
    this.Visiblity = this.Visiblity - 5;
    tint(255, this.Visibility);
    rect(this.body.position.x, this.body.position.y, this.width, this.height)
    pop();
    }
  }
}
