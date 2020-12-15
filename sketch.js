const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground
var boy,boyimg
var tree,treeimg
var m1,m2,m3,m4,m5,m6
var stone
var rope

function preload()
{
	boyimg = loadImage("boy.png")
	treeimg = loadImage("tree.png")
}

function setup() {
	createCanvas(800,350);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,340,1000,10)



	m1 = new Mango(600,150,25)
	m2 = new Mango(700,150,25)
	m3 = new Mango(650,100,25)
	m4 = new Mango(700,50,25)
	m5 = new Mango(700,100,25)
  m6 = new Mango(770,150,25)

  stone = new Rock(200,100,25)
    
  rope = new Rope(stone.body,{x:200, y:100})


	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
  image(treeimg,550,0,250,350)
  image(boyimg,100,150,200,250)
  ground.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  stone.display();
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}
