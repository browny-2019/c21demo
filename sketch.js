
var wall,thickness;
var speed,bullet,weight;


function setup() {

  createCanvas(1600,400);
  wall=createSprite(1200, 100, thickness, height/2);
  wall2=createSprite(1200,200,thickness,height/2);
  wall3=createSprite(1200,300,thickness,height/2);
  wall4=createSprite(1200,390,thickness,height/2);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

}

function draw() {
  background(80,80,80);  
  drawSprites();
}
function hascollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
      return true
  }
  return false;

}
if(hascollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapecolor=color(255,0,0);

  }
  if(damage<10){
wall.shapecolor=color(0,255,0);
  }
}