var myXs = [];
var myYs = [];
var myDiameters = [];
var keys = [];
var circleObject = [];
var triangleObject = [];
var speed = 5;


function setup()
{
    createCanvas(2000, 1000);
    createCharacter(100,500);
    array();
}
function array()
{
//henchmen
myDiameters[0]=30;
    for (var i = 0; i < 10; i++) 
{
        myXs[i] = random(width); // initialize x coordinate randomly
        myYs[i] = random(height); // initialize y coordinate randomly
}
    for (var i = 0; i < 10; i++)
{
    circleObject[i] = new Circle (myXs[i],myYs[i],myDiameters[0],200,10,10);
}
//bigboss
myXs[11]=10;
myYs[11]=10;
myDiameters[1]=10
circleObject[11] = new Circle (myXs[11],myYs[11],myDiameters[1],125,0,25)
//character square
myXs[12]=100;
myYs[12]=500;
myDiameters[2]=30;
//character upgrade triangles
myXs[13]=myXs[12]+30;
myYs[13]=myYs[12]+30;
myXs[14]=myXs[12]+30;
myYs[14]=myYs[12];
myXs[15]=myXs[12]+60;
myYs[15]=myYs[12]+15;
//bullet triangles
myXs[16]=myXs[13];
myYs[16]=myYs[13]-5;
myXs[17]=myXs[14];
myYs[17]=myYs[14]+5;
myXs[18]=myXs[15]-10;
myYs[18]=myYs[15];
//character upgrade triangles
triangleObject[1] = new Triangle (myXs[13],myYs[13],myXs[14],myYs[14],myXs[15],myYs[15],999,999,999);
//bullet triangles
triangleObject[0] = new Triangle (myXs[16],myYs[16],myXs[17],myYs[17],myXs[18],myYs[18],0,0,999);

    //keys
    keys [1] = 87; //w
    keys [2] = 65; //s
    keys [3] = 83; //a
    keys [4] = 68; //d
    keys [5] = 32;
}

function draw()
{
    background(0,0,10);
    displayCircles();
    character();
    characterMovement();
    triangleMovement();
    bulletMovement();
    bulletCollision();
    win();
    instructions();
}
function instructions()
{
    textSize(30);
    fill(255);
    text("Shoot the asteroids with space!", 800, 50);
    text("Use WASD to move around!", 820,100)
}
function win()
{
    var allZero = true;
    for (var i = 0; i < 10; i++) {
        if (circleObject[i].diameter != 0) {
            allZero = false;
            break;
        }
    }
    if (allZero) {
        textSize(70);
        fill(255);
        text("You win!", 900, height/2);
    }
}
function displayCircles()
{
//henchmen
    for(var i = 0; i < 10; i++)
    {
    circleObject[i].display();
    }
//move henchmen
    for (var i = 0; i < 10; i++) {
        myXs[i] += speed;
        circleObject[i].x = myXs[i]
        if (myXs[i] > width) { 
            myXs[i] = 0; 
          }
    }
//bigboss
circleObject[11].display();
}
//character
function createCharacter(x,y)
{    
    myXs[12] = x;
    myYs[12] = y;
}
function character()
{
   square(myXs[12],myYs[12],myDiameters[2])
   triangleObject[1].display()
   triangleObject[0].display()
    /* upgrades:
    triangle()
    */
}
function characterMovement()
{
    if(keyIsDown(keys [1]))
    {
        myYs[12] -= 10;  
    }
    if(keyIsDown(keys [3]))
    {
        myYs[12] += 10; 
    }
    if(keyIsDown(keys [2]))
    {
        myXs[12] -= 10;  
    }
    if(keyIsDown(keys [4]))
    {
        myXs[12] += 10;   
    }
}
function triangleMovement() 
{
    if(keyIsDown(keys[1])) {
        // Move triangle up
        for (var i = 13; i < 16; i++) {
            myYs[i] -= 10;
        }
    }
    if(keyIsDown(keys[3])) {
        // Move triangle down
        for (var i = 13; i < 16; i++) {
            myYs[i] += 10;
        }
    }
    if(keyIsDown(keys[2])) {
        // Move triangle left
        for (var i = 13; i < 16; i++) {
            myXs[i] -= 10;
        }
    }
    if(keyIsDown(keys[4])) {
        // Move triangle right
        for (var i = 13; i < 16; i++) {
            myXs[i] += 10;
        }
    }
    // Update the triangle object with the new coordinates
    triangleObject[1].x1 = myXs[13];
    triangleObject[1].y1 = myYs[13];
    triangleObject[1].x2 = myXs[14];
    triangleObject[1].y2 = myYs[14];
    triangleObject[1].x3 = myXs[15];
    triangleObject[1].y3 = myYs[15];
}

let keyIsPressedFlag = false;
let bulletshot = false;
let originalXs = [];

function bulletMovement() {
    
    if(keyIsDown(keys[1])) {
        for (var i = 16; i < 19; i++) {
            myYs[i] -= 10;
        }
    }
    if(keyIsDown(keys[3])) {
        for (var i = 16; i < 19; i++) {
            myYs[i] += 10;
        }
    }
    if(keyIsDown(keys[2])) {
        for (var i = 16; i < 19; i++) {
            myXs[i] -= 10;
        }
    }
    if(keyIsDown(keys[4])) {
        for (var i = 16; i < 19; i++) {
            myXs[i] += 10;
        }
    }
    triangleObject[0].x1 = myXs[16];
    triangleObject[0].y1 = myYs[16];
    triangleObject[0].x2 = myXs[17];
    triangleObject[0].y2 = myYs[17];
    triangleObject[0].x3 = myXs[18];
    triangleObject[0].y3 = myYs[18];
    if (keyIsDown(keys[5]) && !keyIsPressedFlag) {
        keyIsPressedFlag = true;
        for (var i = 16; i < 19; i++) {
          myXs[i] += 200;
        }
        setTimeout(function() {
          for (var i = 16; i < 19; i++) {
            myXs[i] -= 200;
          }
          keyIsPressedFlag = false;
        }, 1000); 
      }
      triangleObject[0].x1 = myXs[16];
      triangleObject[0].x2 = myXs[17];
      triangleObject[0].x3 = myXs[18];
}
function bulletCollision()
{
    //for (var i = 0; i < circleObject.length; i++) didnt work here for some reason :(
    var d = dist(myXs[18], myYs[18], circleObject[0].x, circleObject[0].y);
    if (d < (myDiameters[0] / 2)) {
      circleObject[0].diameter = 0;
    }
    var d = dist(myXs[18], myYs[18], circleObject[1].x, circleObject[1].y);
    if (d < (myDiameters[0] / 2)) {
      circleObject[1].diameter = 0;
    }
    var d = dist(myXs[18], myYs[18], circleObject[2].x, circleObject[2].y);
    if (d < (myDiameters[0] / 2)) {
      circleObject[2].diameter = 0;
    }
    var d = dist(myXs[18], myYs[18], circleObject[3].x, circleObject[3].y);
    if (d < (myDiameters[0] / 2)) {
      circleObject[3].diameter = 0;
    }
    var d = dist(myXs[18], myYs[18], circleObject[4].x, circleObject[4].y);
    if (d < (myDiameters[0] / 2)) {
      circleObject[4].diameter = 0;
    }
    var d = dist(myXs[18], myYs[18], circleObject[5].x, circleObject[5].y);
    if (d < (myDiameters[0] / 2)) {
      circleObject[5].diameter = 0;
    }
    var d = dist(myXs[18], myYs[18], circleObject[6].x, circleObject[6].y);
    if (d < (myDiameters[0] / 2)) {
      circleObject[6].diameter = 0;
    }
    var d = dist(myXs[18], myYs[18], circleObject[7].x, circleObject[7].y);
    if (d < (myDiameters[0] / 2)) {
      circleObject[7].diameter = 0;
    }
    var d = dist(myXs[18], myYs[18], circleObject[8].x, circleObject[8].y);
    if (d < (myDiameters[0] / 2)) {
      circleObject[8].diameter = 0;
    }
    var d = dist(myXs[18], myYs[18], circleObject[9].x, circleObject[9].y);
    if (d < (myDiameters[0] / 2)) {
      circleObject[9].diameter = 0;
    }
    var d = dist(myXs[18], myYs[18], circleObject[11].x, circleObject[11].y);
    if (d < (myDiameters[0] / 2)) {
      circleObject[11].diameter = 0;
    }
  }
