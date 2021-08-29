var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var clouds, cloudImg;

function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

 
 // console.log(ran)
 
}

function draw() {
  //set background color
  background(2);
  
  console.log(trex.y)
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);

  spawnClouds()
  
  drawSprites();
  
}

function spawnClouds(){
  // create clouds
  if(frameCount % 60 === 0){
  clouds = createSprite(600,100,40,10);
  clouds.addImage(cloudImage);
  clouds.y = Math.round(random(10,80));     
  clouds.scale=0.4;
  clouds.velocityX = -2;     

  clouds.depth = trex.depth - 1
  }


}

