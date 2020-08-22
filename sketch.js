const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var base;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var polygon, polygonImg;
var slingshot;

function preload(){
 polygonImg= loadImage ("Ball.png");
}

function setup() {
  var canvas = createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

ground = new Ground(400,650,800,20);
base = new Ground(540,500,350,20);
box1 = new Box(420,455,40,70);
box2 = new Box(460,455,40,70);
box3 = new Box(500,455,40,70);
box4 = new Box(540,455,40,70);
box5 = new Box(580,455,40,70);
box6 = new Box(620,455,40,70);
box11 = new Box(660,455,40,70);
box7 = new Box(460,385,40,70);
box8 = new Box(500,385,40,70);
box9 = new Box(540,385,40,70);
box10 = new Box(580,385,40,70);
box12= new Box(620,385,40,70);
box13 = new Box(500,315,40,70);
box14 = new Box(540,315,40,70);
box15= new Box(580,315,40,70);
box16 = new Box(540,245,40,70);

polygon = Bodies.circle(200,500,20);
World.add(world,polygon);




slingshot = new SlingShot(this.polygon,{x:200,y:500});

}

function draw() {
  
  background(0);  
  
  ground.display();
  base.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();



slingshot.display();
imageMode(CENTER);
image(polygonImg,polygon.position.x,polygon.position.y,40,40);


  drawSprites();
}
function mouseDragged(){

  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});

  }



function mouseReleased(){
  slingshot.fly();
 
}

function keyPressed(){
  if (keyCode===32){
    slingshot.attach(this.polygon);
  }
}
