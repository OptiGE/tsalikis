// ---------------- S N A K E   C L A S S ----------------------

class Snake{
  constructor(scale, angle, steps, xpos, ypos){
    //Current position of snake
    this.x = xpos;
    this.y = ypos;
    
    //The length of one step
    this.baseVector = new Vector(1, 1);
    
    //Scale of one step, angle to turn in, and how       many steps       before       resetting currStep.
    this.scale     = scale;
    this.angle     = angle;
    this.steps     = steps;
    
    //The current angle and current step. 
    this.currAngle = 0;
    this.currStep  = 1;
  }
  
  move(){
    
    //trig to orient base vector, times scale for size, times the number of steps to take.
    
    console.log(this.currAngle + ":" + this.scale + ":" + this.currStep + ":" + cos(this.currAngle * Math.PI / 180) );
    
    this.x += (cos(this.currAngle * Math.PI / 180) * this.baseVector.x * this.scale * this.currStep);
    this.y += (sin(this.currAngle * Math.PI / 180) * this.baseVector.y * this.scale * this.currStep);
    
    this.currAngle += this.angle;
    this.currStep += 1;
    //reset currstep when it reaches its limit
    if(this.currStep > this.steps){ this.currStep = 1;}
  }

}



//------------------ V E C T O R   C L A S S --------------------

class Vector{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}



//----------- O T H E R   F U N C T I O N S -------------------
            //scale, angle, steps, xpos, ypos
var ninePattern = new Snake(15, 100, 9, 200, 200);
var oldX;
var oldY;

function setup() {
  createCanvas(600, 600);
  background(220);
  var oldX = ninePattern.x;
  var oldY = ninePattern.y;
  
}


function draw() {

  ninePattern.move();
  
  line(oldX, oldY, ninePattern.x, ninePattern.y);
  
  oldX = ninePattern.x;
  oldY = ninePattern.y;

}









