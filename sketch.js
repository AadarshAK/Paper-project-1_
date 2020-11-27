var paper, ground, bin;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
  paper=new Paper(150,400,20);
  
  ground=new Ground(400,670,800,20);
  wa1=new Ground(800,700/2,10,700);
  wa2=new Ground(0,700/2,10,700);
  wa3=new Ground(400,0,800,10);
  
	w1=new Bin(600,650,180,20);
	w2=new Bin(520,580,20,150);
	w3=new Bin(680,580,20,150);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  w1.display();
  w2.display();
  w3.display();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-80});
  }
}