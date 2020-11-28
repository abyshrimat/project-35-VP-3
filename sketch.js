//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock

function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  foodStock = database.ref('Food');
  foodStock.on("value",readstock);
  }


function draw() {  
  background(46, 139, 87)
  drawSprites();
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}

function readStock(data){
foodS = data.val();
}

function writeStock(x);{
  database.ref('/').update({
    Food:x
  })
}

}



