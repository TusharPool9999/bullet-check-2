var wall, bullet;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness =random(22,83);
  
  wall = createSprite(1200 ,200 ,thickness ,height/2 );
  wall.shapeColor=(80,80,80);
  bullet = createSprite(10, 150, 50, 20);
  bullet.shapeColor="black";
  
  bullet.velocityX=speed;
}

function draw() {
  background("red"); 

  if (collide(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thicknes*thickness*thickness);
    
    if(damage>10){
      wall.shapeColor(255,0,0);
    }

    if(damage<10){
      wall.shapeColor(0,255,0);
    }
  }
  
   drawSprites();
}

function collide (lbullet, lwall){
  
  bulletRightEdge=lbullet.x+ lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
    
  }
    return false;
    
}