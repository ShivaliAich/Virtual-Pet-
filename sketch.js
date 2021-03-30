//Create variables here
var dog, happyDog, database, foodS, foodStock,dogImg, happyImg;
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  
  happyImg = loadImage("images/dogImg1.png");
  
}

function setup() {
  database = firebase.database();
  
  
	createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(rgb(46,139,87));
  dog.scale = 0.4;
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyImg);
    dog.scale = 0.4;
  }

  drawSprites();
  //add styles here
  fill("black");
  textSize(30);
  stroke(12);
  text("Food Remaining : "+foodS,130,460);

  fill("red");
  textSize(20);
  stroke(10);
  text("Press up arrowkey to feed Juno milk!",100,50);
}
// function to read values from the database
function readStock (data){
  foodS = data.val();
}
//function to write values in database
function writeStock(x){
  if(x<=0)
  x=0;
  else
  x-=1;
  database.ref('/').update({
    Food :x
  })
}





