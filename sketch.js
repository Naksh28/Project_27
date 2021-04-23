const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bd = 50;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400, 50, 500, 20);

	b1 = new Ball(200, 250, 25);
	b2 = new Ball(270, 250, 25);
	b3 = new Ball(340, 250, 25);
	b4 = new Ball(410, 250, 25);
	b5 = new Ball(480, 250, 25);

	r1 = new Rope(b1.body, ground.body, -2*bd, 0);
	r2 = new Rope(b2.body, ground.body, -1*bd, 0);
	r3 = new Rope(b3.body, ground.body, 0, 0);
	r4 = new Rope(b4.body, ground.body, 1*bd, 0);
	r5 = new Rope(b5.body, ground.body, 2*bd, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');

  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  
  drawSprites();
}

function keyPressed(){
	if (keyCode == 32){
		Matter.Body.applyForce(b1.body, b1.body.position, {x:50, y:-50});
	}
}