const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1
var box2
var pig1,pig2
var log1,log2,log3,log4

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
box1=new Box(700,320,70,70)
box2=new Box(920,320,70,70) 
pig1=new Pig(810,350) 
log1=new Log(810,260,300,PI/2)
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(600,390,1200,20,ground_options);
    World.add(world,ground);

    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    log1.display()
    rectMode(CENTER)
    rect(600,390,1200,20)
}