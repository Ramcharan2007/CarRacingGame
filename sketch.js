var Start=0;
var Play=1;
var End=2;
var Done=3;
var gameState=Start;
var titleScreen;
var BackgroundIma;
var title;
var button,buttonIma;
var player,playerIma;

function preload()
{
  titleScreen=loadImage("Images/Title.jpg");
  BackgroundIma=loadImage("Images/track.jpg");
  buttonIma=loadImage("Images/Button.PNG");
  playerIma=loadImage("Images/car2.png");
}


function setup() 
{
  createCanvas(windowWidth,windowHeight);
  title=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  title.addImage("title",titleScreen);
  title.visible=false;

  button=createSprite(windowWidth/2,windowHeight/2+250,200,30);
  button.addImage("title",buttonIma);
  button.depth=title.depth;
  button.depth+=1

  player=createSprite(150,300,200,100);
  player.addImage("hi",playerIma);
  player.scale=0.35;

  player.visible=false;
}

function draw() {
  background(BackgroundIma);  

  if(gameState===Start)
  {
    title.visible=true;

    if (mousePressedOver(button))
    {
      gameState=Play;
    }
  }

  else if(gameState===Play)
  {
    button.visible=false;
    title.visible=false;

    player.visible=true;
  }

  drawSprites();
}