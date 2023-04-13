// character variables
var characterX = 100;
var characterY = 100;
// key codes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// shape variables
var shapeX = 1000;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;
var shapeA = 500;
var shapeB = 500;
var shapeASpeed;
var shapeBSpeed;
var shapeC = 1500;
var shapeD = 500;
var shapeCSpeed;
var shapeDSpeed;

// mouse shape variables
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(2000, 1000);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 1);
    shapeBSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeDSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    createCharacter(100,500);
}

function draw()
{
    background(100,100,100);
    stroke(0);
    drawCharacter();
    characterMovement();
    createBorders(10);

    //exit
    textSize(20);
    fill(256,0,0)
    text("EXIT!", width-70,height-500)
    text("->", width-50,height-480)

    // enemies
    fill(110,0,0);
    circle(shapeX, shapeY, 50);
    fill(0,0,0)
    square(shapeA, shapeB, 100);
    square(shapeC, shapeD, 100);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 1);
     shapeBSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeDSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shapes
    shapeX += shapeXSpeed;
    shapeY -= shapeYSpeed;
    shapeB += shapeBSpeed;
    shapeD -= shapeDSpeed;

    // check if enemies are out of bounds
    //circle 1
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
    //square 1
    if(shapeB > height)
    {
        shapeB = 0;
    }
    if(shapeB < 0)
    {
        shapeB = height;
    }
    //square 2
    if(shapeC > width)
    {
        shapeC = 0;
    }
    if(shapeC < 0)
    {
        shapeC = width;
    }
    if(shapeD > height)
    {
        shapeD = 0;
    }
    if(shapeD < 0)
    {
        shapeD = height;
    }

    // check to see if the character has left the exit
    if(characterX > width && characterY > 400 && characterY <600)
    {
        fill(0);
        textSize(100);
        text("You Win!", 800, 500);
    }

    // mouse clicked enemy
    fill(240,100,100);
    circle(mouseShapeX, mouseShapeY, 205);
}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

//character
function characterMovement()
{
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
}
function drawCharacter()
{
    fill(23,40,123);
    circle(characterX,characterY,25);
}
//borders
function createBorders(thickness)
{
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0, height-thickness,width, thickness);
    rect(width-thickness,0,thickness,height-550);
    rect(1990,550,10,500);
}

