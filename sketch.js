//Create variables here
var dog,happyDog,dogI,database,foodS,foodStock;
function preload()
{
	//load images here
  dogHappy.loadImage("dogImg.png")
  dogI.loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  var dog=createSprite(250,250,50,50);
  dog.addImage(dogHappy)
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  //add styles here

}



