
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var bob1,bob2,bob3,bob4,bob5;
var plateform1;
var chain1,chain2,chain3,chain4,chain5;



function setup() {
	createCanvas(650, 450);
	rectMode(CENTER);  


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new bob(180,330,55);
	bob2 = new bob(235,330,55);
	bob3 = new bob(290,330,55);
	bob4 = new bob(346,330,55);
	bob5 = new bob(400,330,55);

	plateform1 = new plateform(290,50,280,20);

	chain1 = new chain(bob1.body,plateform1.body,-55*2,0)
	chain2 = new chain(bob2.body,plateform1.body,-55*1,0)
	chain3 = new chain(bob3.body,plateform1.body,0,0)
	chain4 = new chain(bob4.body,plateform1.body,55*1,0)
	chain5 = new chain(bob5.body,plateform1.body,55*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  bob1.display();
  bob2.display();
 bob3.display();
 bob4.display();
  bob5.display();
  plateform1.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}

function keyPressed() {
    if (keyCode === UP_ARROW) {

      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
  
    }
}

