const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, wall, string

function setup(){
    createCanvas(300,300)
engine=Engine.create()
world= engine.world;
var walloption ={
    isStatic:true
}
wall= Bodies.rectangle(150,20,200,20,walloption)

var balloption={
    restitution:0.1,
    density:0.1
}
ball=Bodies.circle(150,250,30,balloption)
World.add(world,wall)
World.add(world,ball)

var option= {bodyA:wall, bodyB:ball, stiffness:0.1, length:150}
string= Constraint.create(option)
World.add(world,string)
}

function draw(){
    background(67,200, 122)
Engine.update(engine)
rectMode(CENTER)
rect(wall.position.x,wall.position.y, 200,20)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,30)
strokeWeight(5)
line(wall.position.x,wall.position.y,ball.position.x,ball.position.y)

if(keyCode===32){
    ball.position.x=mouseX
    ball.position.y=mouseY
}
else if (keyCode=== ENTER){
    ball.position.x= 150
    ball.position.y=250
}

}