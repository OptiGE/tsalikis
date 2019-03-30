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
    
    //console.log(this.currAngle + ":" + this.scale + ":" + this.currStep + ":" + cos(this.currAngle * Math.PI / 180) );
    
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



//------------------- C O L O R   C L A S S -------------------------
class Color{
	
	constructor(red, green, blue){
		this.red = red;
		this.green = green;
		this.blue = blue;
		
		this.updown = 1;
		this.factor = 1;
	}
	
	
	addred(){
		this.red += 1;
	}
	
	rainbowStep(){
		
		if(this.red <= 255 && this.red >= 0){
			this.red+= (this.factor * this.updown);
	
		}else{
			//When red hits the roof, increase green
			if(this.green < 255 && this.green >= 0){
				this.green += (this.factor * this.updown);
				
			}else{
				//When green hits the roof, increase blue
				if(this.blue < 255 && this.blue >= 0){
					this.blue += (this.factor * this.updown);
					
				}else{
					this.red -= 1;
					this.green -=1;
					this.blue -= 1;
					
					
					
					this.updown *= -1;
				}
			}
		}
		
	}
	
	
}



//----------- O T H E R   F U N C T I O N S -------------------
            //scale, angle, steps, xpos, ypos
var ninePattern = new Snake(0.5, 3, 35, 350, 250);
var oldX;
var oldY;

var myColor = new Color(0, 0, 0)

function setup() {
  createCanvas(600, 600);
  background(10);
  var oldX = ninePattern.x;
  var oldY = ninePattern.y;
  
}

function draw() { 

  //console.log(myColor.red + ": is the red value");
  stroke(myColor.red, myColor.green, myColor.blue);
  strokeWeight(4);
  myColor.rainbowStep();
  
  //Actual drawing
  ninePattern.move();
  
  line(oldX, oldY, ninePattern.x, ninePattern.y);
  
  oldX = ninePattern.x;
  oldY = ninePattern.y;

}









