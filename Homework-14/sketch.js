var keys = [];
var myXs = [];
var myYs = [];
var myDiameters = [];
var myXs1 = [];
var myYs1 = [];
var myDiameters1 = [];
var myXs2 = [];
var myYs2 = [];
var myDiameters2 = [];
var i
var speed = 10;


function setup()
{
    createCanvas(2000, 1000);
    createCharacter(100,500);
    array();
    for (var i = 0; i < 10; i++) {
        myXs2[i] = random(width); // initialize x coordinate randomly
        myYs2[i] = random(height); // initialize y coordinate randomly
        myDiameters2[i] = random(20, 50); // initialize diameter randomly
      }
}

function array()
{
//square 1
 myXs[0] = 500; 
 myYs[0] = 500;
 myDiameters[0] = 100;
//square 2
 myXs[1] = 1500; 
 myYs[1] = 500;
 myDiameters[1] = 100;
//circle
 myXs[2] = 1000; 
 myYs[2] = 50;
 myDiameters[2] = 50;
//mouse circle
myXs[3]; 
myYs[3];
myDiameters[3] = 205;
//character
myXs[4] = 100; 
myYs[4] = 500;
myDiameters[4] = 25;
//speed
myXs[5];
myXs[6];
myXs[7];
myXs[8];
//keys
keys [1] = 87;
keys [2] = 65;
keys [3] = 83;
keys [4] = 68;
//new enemies
var x = 50;
var y = 50;
var diameter = 25;
for(var i = 0; i < 100; i++)
{
    myXs1[i] = x;
    myYs1[i] = y;
    myDiameters1[i] = diameter;
    x += 100;
    y += 0;
    diameter += 5;
}
}
function draw()
{
    background(100,100,100);
    stroke(0);
    drawCharacter();
    characterMovement();
    createBorders(20);
    exit();
    checkexit();
    enemies();
    randomspeed();
    checkenemyborders();
    moveShape(); 
    createNewenemies();
    clickedenemies();

}

function clickedenemies(){
  for (var i = 0; i < myXs2.length; i++) {
    myXs2[i] += speed / 2;
    myYs2[i] += speed; 
    if (myXs2[i] > width) { 
      myXs2[i] = 0; 
    }
    if (myYs2[i] > height) { 
      myYs2[i] = 0; 
    }
  }
  for (var i = 0; i < myXs2.length; i++) {
    fill(240, 100, 100); 
    circle(myXs2[i], myYs2[i], myDiameters2[i]); 
  }
}
function mouseClicked() {
  myXs2.push(mouseX);
  myYs2.push(mouseY);
  myDiameters2.push(random(20, 50));
}
function createNewenemies() {
fill(255,255,255);
    for (var i = 0; i < 15; i++) {
      myXs1[i] += speed;
      if (myXs1[i] > width) {
        myXs1[i] = 0; 
      }
    }
    for (var i = 0; i < 10; i++) {

      circle(myXs1[i], myYs1[i] + 500, myDiameters1[i]);
    }
    fill(200,90,200)
      for (var i = 0; i < 10; i++) {
  
        circle(myXs1[i], myYs1[i] + 900, myDiameters1[i]);
      }
      fill(200,110,90)
        for (var i = 0; i < 15; i++) {
    
          circle(myXs1[i], myYs1[i] + 100, myDiameters1[i]);
        }
}

//enemies
function enemies()
{
    fill(110,0,0);
    circle(myXs[2], myYs[2], myDiameters[2]);
    fill(0,0,0)
    for(var i = 0; i < 2; i++)
    {
        square(myXs[i],myYs[i],myDiameters[i]);
    }
}
function checkenemyborders()
{
    //circle
    if(myXs[2] > width)
    {
        myXs[2] = 0;
    }
    if(myXs[2] < 0)
    {
        myXs[2] = width;
    }
    if(myYs[2] > height)
    {
        myYs[2] = 0;
    }
    if(myYs[2] < 0)
    {
        myYs[2] = height;
    }
    //square 1
    if(myYs[0] > height)
    {
        myYs[0] = 0;
    }
    //square 2
    if(myYs[1] < 0)
    {
        myYs[1] = height;
    }
}
function moveShape()
{   
    myXs[2] += myXs[5];
    myYs[2] -= myXs[6];
    myYs[0] += myXs[7];
    myYs[1] -= myXs[8];

}
function randomspeed()
{
    myXs[5] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 1);
    myXs[6] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 1);
    myXs[7] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    myXs[8] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    myYs1[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}
//mouse enemy

//exit
function exit()
{
    textSize(20);
    fill(256,0,0)
    text("EXIT!", width-70,height-500)
    text("->", width-50,height-480)
}
function checkexit()
{
    if(myXs[4] > width && myYs[4] > 400 && myYs[4] <600)
    {
        fill(0);
        textSize(100);
        text("You Win!", 800, 500);
    }
}
//character
function createCharacter(x,y)
{
    myXs[4] = x;
    myYs[4] = y;
}
function drawCharacter()
{
    fill(100,100,253);
    circle(myXs[4],myYs[4],25);
}
function characterMovement()
{
    if(keyIsDown(keys [1]))
    {
        myYs[4] -= 10;   
    }
    if(keyIsDown(keys [3]))
    {
        myYs[4] += 10;   
    }
    if(keyIsDown(keys [2]))
    {
        myXs[4] -= 10;   
    }
    if(keyIsDown(keys [4]))
    {
        myXs[4] += 10;   
    }
}
//borders
function createBorders(thickness)
{
    fill(0)
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0, height-thickness,width, thickness);
    rect(width-thickness,0,thickness,height-550);
    rect(width-thickness,550,thickness,500);
}

