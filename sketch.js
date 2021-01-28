const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
const Constraint = Matter.Constraint;

var engine, world;
var bob1;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
 

    ground1 = new Ground(600,100,600,30);
    bob1 = new bob(460,450,70);
    bob2 = new bob(530,450,70);
    bob3 = new bob(600,450,70);
    bob4 = new bob(670,450,70);
    bob5 = new bob(740,450,70);

    

    chain1 = new Chain(bob1.body,ground1.body,-137,17);
    chain2 = new Chain(bob2.body,ground1.body,-67,17);
    chain3 = new Chain(bob3.body,ground1.body,3,17);
    chain4 = new Chain(bob4.body,ground1.body,70,17);
    chain5 = new Chain(bob5.body,ground1.body,145,17);

    
    Engine.run(engine);
}

function draw(){
   background("lightpink");
    Engine.update(engine);
   
    
    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();


    ground1.display();

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    
    keyPressed();
  
    
}


function keyPressed() {
    if (keyCode === UP_ARROW ) {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:10});
   
    
     }
    
    }
  