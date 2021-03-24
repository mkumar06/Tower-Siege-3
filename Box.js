class Box {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.4,
      friction: 0.25,
      density: 0.15
    }
    this.image = loadImage("rectangle.png");
    this.width = width + 20;
    this.height = height + 15;
    this.Visibility = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
  }
  display() {
    if(this.body.speed < 5){
      push();
      imageMode(CENTER);
      fill("red");
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
      pop();
     }
     else{
       World.remove(world, this.body);
    push();
    imageMode(CENTER);
    fill("red");
    this.Visibility = this.Visibility - 5;
    tint(255, this.Visibility);
    image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
    pop();
    }
  }
  score() {
    if(this.Visibility < 0 && this.Visibility > -105) {
      score++;
    }
  }
}