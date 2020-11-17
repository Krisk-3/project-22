const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,object,ball,ball2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic:true
  }
  var option = {
    restitution:1
  }
  object = Bodies.rectangle(200,380,400,20,options)
  ball = Bodies.circle(200,200,70,option)
  ball2 = Bodies.circle(100,200,40,option)
  World.add(world,ball2)
  World.add(world,ball)
  World.add(world,object)
  console.log(object)
  console.log(object.position.x)
  console.log(object.position.y)
}

function draw() {
  background(0);
  Engine.update(engine) 
  ellipseMode(RADIUS)
  ellipseMode(RADIUS)
  ellipse(ball2.position.x,ball2.position.y,40,40) 
  ellipse(ball.position.x,ball.position.y,70,70) 
  rectMode(CENTER)
  rect(object.position.x,object.position.y,400,30)
  drawSprites();   
}