const Constraint= Matter.Constraint;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backgroundimg;
var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var newLog;
var chain;
function preload(){
    backgroundimg=loadImage("images/bg.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,520,70,70);
    box2 = new Box(920,520,70,70);
    pig1 = new Pig(810,520);
    log1 = new Log(810,460,20,300,PI/2);
    
    box3 = new Box(700,440,70,70);
    box4 = new Box(920,440,70,70);
    pig2 = new Pig(810,440);
    log2 = new Log(810,420,20,300,PI/2);
    box5 = new Box(810,360,70,70);
    log3 = new Log(760,320,20,150,PI/7);
    log4 = new Log(870,320,20,150,-PI/7);

    bird= new Abird(100,100,50,50);
    
    newLog= new Log(90,90,50,50,PI/2);
    chain=new Chain(bird.body,newLog.body);
    
}

function draw(){
    background(backgroundimg);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    box5.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    newLog.display(); 
    chain.display();   
}