//variable and datatypes
var score = 5;
var name = "Yeeeeeet!!";
var nothing = null;
var bool = true;
var scoré = 0
// undefined variable
var rank;
//arrays
var arr2 = [score,"Yeet",bool];
console.log(arr2[1]);

var arr1 =  [1,2,3,4,5,6]

console.log(arr1.length);
console.log(arr1[0]);
console.log(arr1[4]);

arr1.push(7,8,9);
console.log(arr1);

arr1.pop();
console.log(arr1);

var arr3 = [[1,2],[3,4],[5,6]];
console.log(arr3[0][0]);
console.log(arr3[2][1]);
console.log(arr3[1][0]);


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b0x1
var b0x2
var engine,world;
var planetGross
var Yeeted = "onstring"
function preload()
{
Wheeeeee=loadSound("sprites/bird_flying.mp3")
bgChange();
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  /*   var b_options = {

      restitution : 1.5
    }
  
  ball = Bodies.circle(200,200,25, b_options)
World.add(world,ball);
*/

b0x1=new Box(700,320,70,70);
b0x2=new Box(920,320,70,70);
gr0und=new QuidditchPitch(600,385,1200,15)
pork=new Pork(810,300,50,50)
broom=new Firebolt(810,275,20,300,PI/2);


b0x3=new Box(700,220,70,70);
b0x4=new Box(920,220,70,70);
bacon=new Pork(810,200,50,50)
jhadu=new Firebolt(810,175,20,300,PI/2);
//swepton=new Firebolt(100,175,20,75,PI/2);


b0x5=new Box(810,150,70,70);
ShootingStar=new Firebolt(730,150,20,150,PI/7)
Cleansweep=new Firebolt(890,150,20,150,PI/-6)


Chicolas=new Feather(210,60,55,55)
platform=new QuidditchPitch(150,300,300,170)

slinger=new spyder(Chicolas.object, { x: 210, y: 60 })
}



function draw() {
if(planetGross){
background(planetGross);
}
 else{
 background("lime")
}
Engine.update(engine);
fill("cyan");
 // ground.isStatic=true;
 /*fill("fuchsia")
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,25)
//ball.restitution=2
*/
textSize(15);
text("Score: "+ scoré, 10, 15);

b0x1.disrespect();
b0x2.disrespect();
gr0und.disrespect();
pork.disrespect();
pork.scoré();
broom.disrespect();
b0x3.disrespect();
b0x4.disrespect();
bacon.disrespect();
bacon.scoré();
jhadu.disrespect();
ShootingStar.disrespect();
Cleansweep.disrespect();
b0x5.disrespect();
Chicolas.disrespect();
//swepton.disrespect();
platform.disrespect();
slinger.disrespect();
}

function mouseDragged(){
 if (Yeeted==="onstring"){
  Matter.Body.setPosition(Chicolas.object,{ x: mouseX, y: mouseY })
 }}

function mouseReleased(){
  slinger.breakConstraint();
  Wheeeeee.play()
  
  Yeeted = "launched"
 
}

function keyPressed(){  
if (Chicolas.object.speed<=5 && keyCode===32){
  Matter.Body.setPosition(Chicolas.object,{ x: 210, y: 60 })
  slinger.attach(Chicolas.object)
  Yeeted="onstring"
  Chicolas.tragedy=[]
  }
 }


// API call
async function bgChange(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var jsondata = await response.json();
  var datetime = jsondata.datetime
  var hr = datetime.slice(11,13);
  if(hr>=06 && hr<=19){
  planetGross=loadImage("sprites/bg.png")
  }else{
  planetGross=loadImage("sprites/starrysky.jpg")
  }
  
}