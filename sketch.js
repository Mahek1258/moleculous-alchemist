var periodicTImg ;
var elements = [];
var answer ;
var database ;
var eleObject;
//level 1
var hydrogen ,oxygen , carbon , copper , calcium , nitrogen , nitrogenOxide;
var sodium , alluminium , clorine , sulfur;
var hydrogenImg , nitrogenImg , oxygenImg , carbonImg , argonImg;

//level 2
var iodine , argon , phosphorus , magnesium , potassium ;
var gold , uranium , iron , silver , platinum ;

// level 3
var boron , neon , krypton , helium , zinc , bromine;
var germanium , silicon , arsenic , yttrium ;

//level 4
var tungsten , seaborgium , meitnerium , darmstadtium , mercury ;
var lead , indium , beryllium , lithium , tin ;

// level 5
var gallium , radium , barium , cobalt , polonium , strontium ;
var bismuth , nickel , chromium , arsenic ;

// level 6
var caesium , antimony , scandium , selenium , lanthanum ; 
var cadmium , rubidium , rhodium , osmium , thallium;

// level 7
var ruthenium  , palladium , nobellium , thorium ;
var erbium , vanadium , terbium , lutetium , tantalum ;

function preload(){
  periodicTImg = loadImage("images/periodicTable.jpg");
  nitrogenImg = loadImage("images/nitrogen.jpg");
  oxygenImg = loadImage("images/oxygen.jpg");
  argonImg = loadImage("images/argon.jpg");
  carbonImg = loadImage("images/carbon.jpg");

}
function setup(){
 createCanvas(displayWidth - 30,displayHeight - 40);

 database = firebase.database();

 eleObject = new Element();
 // first level
hydrogen = createSprite(displayHeight - 90 , displayWidth - 1250 , 10, 10);
oxygen = createSprite(displayHeight + 460 , displayWidth - 1200 , 10, 10);
oxygen.addImage(oxygenImg);
oxygen.scale = 0.3;
carbon = createSprite(displayHeight + 387 , displayWidth - 1195 , 10, 10);
carbon.addImage(carbonImg);
carbon.scale = 0.3;
copper = createSprite(displayHeight + 278 , displayWidth - 1090 , 10, 10);
calcium  = createSprite(displayHeight - 55 , displayWidth - 1090 , 10, 10);
nitrogen = createSprite(displayHeight + 425 , displayWidth - 1200 , 10, 10);
nitrogen.addImage(nitrogenImg);
nitrogen.scale = 0.3;
sodium = createSprite(displayHeight - 90 , displayWidth - 1145 , 10, 10);
alluminium = createSprite(displayHeight + 350 , displayWidth - 1145 , 10, 10);
clorine = createSprite(displayHeight + 495.5 , displayWidth - 1145 , 10, 10);
sulfur = createSprite(displayHeight + 460 , displayWidth - 1145 , 10, 10);

//second level
iodine = createSprite(displayHeight + 495.5 , displayWidth - 1037 , 10 , 10);
argon = createSprite(displayHeight + 535 , displayWidth - 1145 , 10 , 10);
argon.addImage(argonImg);
argon.scale = 0.3;
phosphorus = createSprite(displayHeight + 425 , displayHeight - 1145 , 10 , 10);
magnesium = createSprite(displayHeight - 55 , displayWidth - 1145 , 10 , 10);
potassium = createSprite(displayHeight - 90 , displayWidth - 1090 , 10 , 10);
gold = createSprite(displayHeight + 278 , displayWidth - 980 , 10 , 10);
uranium = createSprite(displayHeight + 95 , displayWidth - 815 , 10 , 10);
iron = createSprite(displayHeight + 95 , displayWidth - 1090 , 10 , 10);
silver = createSprite(displayHeight + 278 , displayWidth - 1037 , 10 , 10);
platinum = createSprite(displayHeight  + 240 , displayWidth - 980 , 10 , 10);

//third level
boron = createSprite(displayHeight + 350 , displayWidth - 1195 , 10 , 10);

}


function draw(){
background("black");
image(periodicTImg , displayWidth - 800 , displayHeight - 700 , 700 , 600);
//if(mousePressedOver(hydrogen)){
 // element.push("H");

//}
//if(mousePressedOver(oxygen)){
 // element.push("O");


//}
elementSelection(nitrogen,oxygen, nitrogenOxide);
elementSelection(carbon,argon);
//elementSelection(oxygen);
/*if(mousePressedOver(nitrogen)){
  mouseDragged(nitrogen);
}*/
drawSprites();
}
function elementSelection(element1,element2,element3){
if (mousePressedOver(element1)){

  /*
  element1.x = 200;
  element1.y = 200;
  element1.scale = 1;*/
  mouseDragged(element1);
}
if (mousePressedOver(element2)){
 /* element2.x = 350;
  element2.y = 200;
  element2.scale = 1;*/
  mouseDragged(element2);
  element3 = createSprite(200,200,10,10);

}

}
function mouseDragged(element){
  element.x = mouseX;
  element.y = mouseY;
}
/*function mouseReleased(){
  nirtrogen.x = 200;
  nitrogen.y = 200;
}*/