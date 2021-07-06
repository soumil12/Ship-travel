
var seaImg;
var shipImg1;
var ship;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png");
}

function setup(){
  createCanvas(400,400);
   
ship = createSprite(100,200);
ship.addAnimation("ship",shipImg1);
ship.scale = 0.2;



}

function draw() {
  
background(seaImg)

 
 drawSprites();
}