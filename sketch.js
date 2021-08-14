//Create variables here
var dog, happyDog, foodS, foodStock, database, foodObj, lastfed, fedtime

function preload(){ 
  dogImg=loadImage("dogImg.png"); 
  dogImg1=loadImage("dogImg1.png"); 
}

function setup() {
	createCanvas(900, 550);
  dog = createSprite(750, 350, 20, 20)
  dog.addImage(dogImg);
  dog.scale=0.3;
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  foodObj = new Food(200, 200, 20, 30)
 
}


function draw() {  
background(150, 70, 500)
if(keyWentDown(UP_ARROW)){
  writeStoke(foodS);
  dog.addImage(dogImg1);
}
var button1 = createButton("Add Food")
button1.position(800, 70)
var button2 = createButton(" Feed Dargo ")
button2.position (900, 70)

foodObj.display();

  drawSprites();
  //add styles here
textSize(18)
fill('black')
stroke(4)
text('NOTE : press up arrow key to feed dargo milk', 10, 40)
text ('food remaining : '+ foodS, 10, 70)
}

function readStock(data) {
  foodS = data.val();
}
function writeStoke(x){
  if(x<=20 && x>0){
    x=x-1
  }
  else {
    x=0;
  }
  database.ref('/').update({
    Food:x
  })
}



