const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	dustbinImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(700, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	paperball = new Paper(100, 450);
	
	leftdustbin = new Dustbin(558, 400, 10, 135,);
	bottomdustbin = new Dustbin(618, 470, 125, 5);
	rightdustbin = new Dustbin(678, 400, 10, 135);

	ground = new Ground(400, 480, 800, 10);

	Engine.run(engine);

	if (keyDown(UP_ARROW)){
		keyPressed();
  }
}

function draw() {
  background("cyan");
  
  drawSprites();
  paperball.display();
  ground.display();
  leftdustbin.display();
  bottomdustbin.display();
  rightdustbin.display();
  image(dustbinImage,543,325,150,150);
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body, paperball.body.position, {x:50, y:-80});
	}
}