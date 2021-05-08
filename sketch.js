//declaring global variables
var bgImg;
var car1Img,car2Img,car3Img,car4Img;
var car1,car2,car3,car4,carLeftGroup,carRightGroup;
var logImg,log,logGroup;
var turtImg1,turt1,turtImg2,turt2,turtImg3,turt3,turtImg4,turt4,turtGroup;
var croc, crocAnimation, crocGroup;
var frogImgBk, frog;
var score=0;
var lives=6;
var chances=6;
var frogEnd1,frogEnd2,frogEnd3,frogEnd4,frogEnd5,frogEnd6;
var frogEnd1Img,frogEnd2Img,frogEnd3Img,frogEnd4Img,frogEnd5Img,frogEnd6Img;
var gameState= "play";
var gameOverImg;
var loserImg, winnerImg;


// to load images
function preload(){
bgImg= loadImage("Images/background.png");
car1Img=loadImage("Images/car1.png");
car3Img=loadImage("Images/car3.png");
car2Img=loadImage("Images/car2.png")
car4Img=loadImage("Images/car4.png")

logImg=loadImage("Images/log.png");

turtImg1=loadImage("Images/turtle.png");
turtImg2=loadImage("Images/turtle.png");
turtImg3=loadImage("Images/turtle.png");
turtImg4=loadImage("Images/turtle.png");

crocAnimation=loadAnimation("Images/crocodile closed.png","Images/crocodileopen.png");

frogImgBk=loadImage("Images/frogBack.png");

frogEnd1Img=loadImage("Images/Frogatend.png");
frogEnd2Img=loadImage("Images/Frogatend.png");
frogEnd3Img=loadImage("Images/Frogatend.png");
frogEnd4Img=loadImage("Images/Frogatend.png");
frogEnd5Img=loadImage("Images/Frogatend.png");
frogEnd6Img=loadImage("Images/Frogatend.png");

gameOverImg=loadImage("Images/gameOver.jpg");

loserImg= loadImage("Images/loser.png.png");
winnerImg=loadImage("Images/Winner.png");

}

function setup() {
  createCanvas(1200,570);
  console.log(width,height);

  //creating frog sprite
  frog = createSprite(width/2,height-20);
  frog.addImage(frogImgBk);
  frog.scale=0.1;
  frog.debug= true;
  frog.setCollider("rectangle",0,0,50,100);

  //created end frog
  frogEnd1=createSprite(125,16);
  frogEnd1.addImage(frogEnd1Img);
  frogEnd1.scale=0.2;
  frogEnd1.visible=false;

  frogEnd2=createSprite(310,20);
  frogEnd2.addImage(frogEnd2Img);
  frogEnd2.scale=0.2;
  frogEnd2.visible=false;

  frogEnd3=createSprite(500,20);
  frogEnd3.addImage(frogEnd3Img);
  frogEnd3.scale=0.2;
  frogEnd3.visible=false;

  frogEnd4=createSprite(700,20);
  frogEnd4.addImage(frogEnd4Img);
  frogEnd4.scale=0.2;
  frogEnd4.visible=false;

  frogEnd5=createSprite(885,20);
  frogEnd5.addImage(frogEnd5Img);
  frogEnd5.scale=0.2;
  frogEnd5.visible=false;


  frogEnd6=createSprite(1075,20);
  frogEnd6.addImage(frogEnd6Img);
  frogEnd6.scale=0.2;
  frogEnd6.visible=false;
  
  
  //creating groups
  logGroup = new Group();
  carLeftGroup = new Group();
  carRightGroup= new Group();
  turtGroup = new Group();
  crocGroup = new Group();

}

function draw() {
  background(bgImg);  
  bgImg.scale=0.6;

  if(gameState==="play"){
  //to reduce lives when frog touches obstacles

  if(frog.isTouching(carLeftGroup)
  ||frog.isTouching(carRightGroup)
  ||frog.isTouching(crocGroup)
  ||frog.isTouching(logGroup)
  ||frog.isTouching(turtGroup)){
    frog.x= width/2;
    frog.y= height;
    lives=lives-1;
  }

  //to move the frog up
  if( keyDown(UP_ARROW)){
    frog.y= frog.y-10;
    frog.velocityY=0;
  }

  //to move frog right
  if(keyDown(RIGHT_ARROW)){
    frog.x=frog.x+10;
    frog.velocityX=0;
  }

  //to move frog left
  if(keyDown(LEFT_ARROW)){
    frog.x=frog.x-10;
    frog.velocityX=0;
  }

  
  if(frog.y<20&&frog.x>=90&&frog.x<=160){
    frogEnd1.visible=true;
    frog.x=width/2;
    frog.y=height-20;
    score=score+100;
    chances=chances-1;
  }

  if(frog.y<20&&frog.x>280&&frog.x<=350){
    frogEnd2.visible=true;
    frog.x=width/2;
    frog.y=height-20;
    score=score+100;
    chances=chances-1;
  }

  if(frog.y<20&&frog.x>465&&frog.x<=540){
    frogEnd3.visible=true;
    frog.x=width/2;
    frog.y=height-20;
    score=score+100;
    chances=chances-1;
  }

  if(frog.y<20&&frog.x>655&&frog.x<=730){
    frogEnd4.visible=true;
    frog.x=width/2;
    frog.y=height-20;
    score=score+100;
    chances=chances-1;
  }

  if(frog.y<20&&frog.x>845&&frog.x<=920){
    frogEnd5.visible=true;
    frog.x=width/2;
    frog.y=height-20;
    score=score+100;
    chances=chances-1;
  }

  if(frog.y<20&&frog.x>1190&&frog.x<=1110){
    frogEnd6.visible=true;
    frog.x=width/2;
    frog.y=height-20;
    score=score+100;
    chances=chances-1;
  }

  if(chances<0||lives===0){
    gameState= "end";

  }  


  // to display the mouse positions
  console.log(mouseX,mouseY);

  //calling functions
  spawnLogs();
  spawnCarsLeft();
  spawnCarsRight();
  spawnTurtles();
  spawnCrocodile();
  drawSprites();
}

  if(gameState==="end"){
    if(score===600){
      imageMode(CENTER);
    image(winnerImg,width/2,height/2,400,400);
    }
    
    else {
      imageMode(CENTER);
    image(loserImg,width/2,height/2,400,400);
    }

  }
  //to display number of lives
  fill("cyan");
  text("LIVES: "+lives,width-300,50);

  text("SCORE: "+score,width-400,50);
}