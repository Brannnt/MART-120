   
   var movement = 10;
   var moovement = 10;
   var x = 200;
   var y = 400;
   var a = 180;
   var b = 225;
   var c = 300;
   var size = 30;
   var count = 0;
   var sizeDirection =2;

   function setup()
    {
        createCanvas (600, 600);
        movement = floor(random() * 10) + 1;
        moovement = floor(random() * 10) + 1;
    }
    function draw()
    {
        background (120);  
        textSize(size);
        size+= sizeDirection;
        count++;
        if(count > 5)
        {
            sizeDirection *=-1;
            count = 0;
        }
        text('Hank', 263,30);
        textSize(28);
        text('Brannt Fahrney', 400, 580);
        fill(255,204,0);
        circle(300,200,200);
        fill(1000)
        circle(330,a,30);
        circle(270,a,30);
        fill(0)
        circle(330,a,10);
        circle(270,a,10);
        if(a >= 300 || a <= 150)
        {
            movement*= -1;
        }
    
         a += movement;
        fill(100)
        line(300,220,180,270);
        line(300,220,420,270);
        rect(b,c,150,200);
        if(b >= 600 || b <= 1)
        {
            moovement*= -1;
        }
    
         b += moovement;
         if(c >= 301 || c <= 20)
         {c
             moovement*= -1;
         }
     
          c += moovement;
        fill(255,204,0);
        ellipse(x,350,100,70);
        if(x >= 300 || x <= 200)
        {
            movement*= -1;
        }
    
         x += movement;
        ellipse(y,350,100,70);
        if(y >= 400 || y <= 301)
        {
            movement*= 1;
        }
    
         y += movement;
        fill(0)
        triangle(225,500,270,500,230,550);
        triangle(375,500,330,500,370,550);
        point(300, 300);
        

        
    }
