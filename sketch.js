var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,31);
  weight=random(50,32)
  car =createSprite(50,200,50,50)

  
  wall =createSprite(1200,200,thickness,height/2)
  wall.shapeColor=80,80,80;
  car.velocityX=speed

  thickness=random(22,83)
}

function draw() {
  background("white");  
  if(wall.x-car.x<(car.width+wall.width/2))
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509
    if(deformation<180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation>100){
      car.shapeColor=color(0,255,0)
    }
  }
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
  }
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    
  }
  hasCollided();
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=bulletLeftEdge){
    return true;
  }
  return false;
}