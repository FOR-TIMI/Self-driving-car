
class Car{
    constructor(positionX,positionY, width,height){
        
        // control car build
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;

        //Movement speed
        this.speed = 0;
        this.maxSpeed = 3;
        this.friction = 0.05;
        this.acceleration = 0.2;
        this.angle=0;


       //Controls car direction
        this.controls = new Controls();




    }

    park(){
       return this.speed = 0
    }

    update(){
      this.#move();
    }

    #move(){
        //To control the forward movement of the car
                if(this.controls.forwardMovement){
                    this.speed+=this.acceleration;
                }
                //To control the backward movement of the car
                if(this.controls.backwardMovement){
                    this.speed-=this.acceleration;
                }
                //To set top speed so the car doesn't move too fast
                if(this.speed > this.maxSpeed){
                    this.speed = this.maxSpeed;
                }
                //To account for the car backward movement
                if(this.speed <- this.maxSpeed/2){
                    this.speed = -this.maxSpeed/2;
                }
        
        
        
                //Do decrease the speed based on friction
                if(this.speed > 0){
                    this.speed-= this.friction;
                }
                if(this.speed < 0){
                    this.speed+= this.friction;
                }
                if(Math.abs(this.speed) < this.friction){
                    this.park();
                }
        
        
                //left controls
                if(this.speed!=0){
                    const flip = this.speed >0 ?1:-1;
                    if(this.controls.leftMovement){
                        this.angle += 0.03*flip;
                    }
                    // right Controls 
                    if(this.controls.rightMovement){
                        this.angle -= 0.03*flip;
                    }
                }
        
                this.positionX -= Math.sin(this.angle)*this.speed;
                this.positionY -= Math.cos(this.angle)*this.speed;
        
    }
    
    
    //To draw a car 
    draw(context){
       context.save();

       //To handle turn animation
       context.translate(this.positionX,this.positionY);
       context.rotate(-this.angle);

       context.beginPath();

       // create car as a rectangle
       context.rect(
        //use the center of the car and then create space around it
         - this.width/2,
         - this.height/2,
         this.width,
         this.height
       );
       context.fill();
       context.restore();
    }
    
}