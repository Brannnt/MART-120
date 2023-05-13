class Circle {
    constructor(x,y,diameter,r,g,b)
    {
    this.x=x;
    this.y=y;
    this.diameter=diameter;
    this.radius = diameter / 2; // calculate the radius from the diameter
    this.r=r;
    this.g=g;
    this.b=b;
    }
    
    display()
    {
        fill(this.r,this.g,this.b);
        circle(this.x,this.y,this.diameter);
    }
    }

