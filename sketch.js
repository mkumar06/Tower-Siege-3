const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
    createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400, 380, 800, 15);
    stand = new Ground(390, 280, 240, 10);
    polygon = new Polygon(600, 200, 20);
    slingshot = new SlingShot(polygon.body, {x: 600, y: 200});

    //level one
    box1 = new Box(330, 235, 30, 40);
    box2 = new Box(360, 235, 30, 40);
    box3 = new Box(390, 235, 30, 40);
    box4 = new Box(420, 235, 30, 40);
    box5 = new Box(450, 235, 30, 40);
    //level two
    box6 = new Box(360, 195, 30, 40);
    box7 = new Box(390, 195, 30, 40);
    box8 = new Box(420, 195, 30, 40);
    //level three
    box9 = new Box(390, 155, 30, 40);
}

function draw() {
    background("lightblue");
    Engine.update(engine);

    ground.display();
    polygon.display();
    stand.display();
    slingshot.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
}

function keyPressed() {
    if(keyCode === 32) {
        slingshot.attach(polygon.body);
    }
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY})
}

function mouseReleased() {
    slingshot.fly();
}