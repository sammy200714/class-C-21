var fixedRect, movingRect, r1,r2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400,100,50,80);
  movingRect = createSprite(400,600,80,30);
  r1 = createSprite(100,300,40,60);
  r2 = createSprite(300,100,30,70);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  r1.shapeColor = "pink";
  r2.shapeColor = "pink";
  
 // fixedRect.velocityY = 5;
 // movingRect.velocityY = -5;
}

function draw() {  
  background(0);  
  collisionDetection(movingRect, fixedRect);
  collisionDetection(movingRect,r1);



 /*if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
    }

    if(movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2
      && fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2){
        movingRect.velocityY = movingRect.velocityY * (-1);
        fixedRect.velocityY = fixedRect.velocityY * (-1);
      }*/
if(collisionDetection(movingRect, fixedRect)){
  text("Collided with green", width/2, 200);
} else {
  text("not collided",width/2,300)
}
if(collisionDetection(movingRect, r1)){
  text("Collided with pink", width/2, 200);
} else {
  text("not collided",width/2,300)
}

  movingRect.x= mouseX;
  movingRect.y = mouseY;

  drawSprites();
  
}

function collisionDetection(object1, object2){
  if(abs(object1.x - object2.x) < object1.width/2 + object2.width/2 &&
     abs(object1.y - object2.y) < object1.height/2 + object2.height/2 ){
     return true;
    } else {
      return false;
    }
}

