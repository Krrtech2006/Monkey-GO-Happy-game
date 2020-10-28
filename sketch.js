var survivalTime;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var invisibleGround;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  //createCanvas(600,600);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
   FoodGroup=createGroup(); 
  obstacleGroup=createGroup();
  
  score=0;
  survivalTime=0;
}


function draw() {
background("white");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score :",score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");

   if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  spawnFoods();
  spawnObstacles();
  
  
  monkey.collide(ground);
  
  
  
  drawSprites();
  fill("black");
    survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:",survivalTime,100,120);
  
}



function spawnFoods() {
  //write code here to spawn the foods
  if (frameCount % 80 === 0) {
    var food = createSprite(600,50,40,10);
    food.y = Math.round(random(80,120));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
    
     //assign lifetime to the variable
    food.lifetime = 200;
    
    //adjust the depth
    food.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    FoodGroup.add(food);
  }
  
}
function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obsctacle = createSprite(600,330,10,40);
   // obsctacle.y = Math.round(random(80,120));
    obsctacle.addImage(obstaceImage);
    obsctacle.scale = 0.1;
    obsctacle.velocityX = -3;
    
     //assign lifetime to the variable
    obsctacle.lifetime = 200;

     obstacleGroup.add(obsctacle);
  }
  }






