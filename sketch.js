const Engine= Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;


let engine, world;
var ball;
var ground;

function setup()
{
  createCanvas(400,400);
  engine= Engine.create();
  world=engine.world;
  var option ={
    isStatic:true
  }
  ground= Bodies.rectangle(200,380,500,50,option);
  World.add(world,ground);


  console.log(ground);



}

function draw() 
{
  var pos=ground.position;
  background(51);
  Engine.update(engine);
  rectMode(CENTER);
  rect(pos.x,pos.y,500,10)
 
}

