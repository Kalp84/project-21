
var canvas;

var  movingRect,gameobj1,gameobj2,gameobj3,gameobj4,music;

function preload(){

 music=loadSound("music.mp3")
  
}


function setup(){
    canvas = createCanvas(400,400);


    movingRect = createSprite(random(20,350),100,20,20);
    movingRect.shapeColor = "white";
    movingRect.velocityY=2
    movingRect.velocityX=-1
  
    gameobj1=createSprite(50,390,70,10)
    gameobj1.shapeColor="blue"
    gameobj2=createSprite(150,390,70,10)
    gameobj2.shapeColor="yellow"
    gameobj3=createSprite(250,390,70,10)
    gameobj3.shapeColor="green"
    gameobj4=createSprite(350,390,70,10)
    gameobj4.shapeColor="red"
  


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    
     if(movingRect.x > 400){
        movingRect.velocityY=2
        movingRect.velocityX=-2
     }
     if(movingRect.y < 0){
        movingRect.velocityX=2
        movingRect.velocityY=2
     }
     if(movingRect.x < 0){
        movingRect.velocityY=-2
        movingRect.velocityX=2
     }
     if(movingRect.y > 400){
        movingRect.velocityY=-2
        movingRect.velocityX=-2
     }
   
    
   
   if( isTouching(movingRect,gameobj2)&& movingRect.bounceOff(gameobj2) ){
    movingRect.shapeColor = "yellow";
    gameobj2.shapeColor = "yellow";
    music.stop();
    movingRect.velocityY=0
    movingRect.velocityX=0

   }
   if( isTouching(movingRect,gameobj3) && movingRect.bounceOff(gameobj3)){
    movingRect.shapeColor = "green";
    gameobj3.shapeColor = "green";
    
   }
   if( isTouching(movingRect,gameobj4)&& movingRect.bounceOff(gameobj4) ){
    movingRect.shapeColor = "red";
    gameobj4.shapeColor = "red";
    
   }
   if(gameobj1.isTouching(movingRect) && movingRect.bounceOff(gameobj1)){
    movingRect.shapeColor = "blue";
    gameobj1.shapeColor = "blue";
    music.play();
    
      
   }
    
   createEdgeSprites();
  
    
    drawSprites();

}

