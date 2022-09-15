class Sensor{
    constructor(car){
        this.car=car;
        this.rayLength = 150; //length of each ray
        this.rayCount = 5; //number of ray lines
        this.raySpread= Math.PI/2; //90 degrees for the angle of the array spread
        this.rays = [];
    }

    update(){
        this.#castRays();
    }

    #castRays(){
        this.rays=[];

        for(let i=0; i <this.rayCount;i++){
            const rayAngle = lerp (
                this.raySpread/2,
                -this.raySpread/2,
                this.rayCount === 1 ? 0.5: i/(this.rayCount - 1) 
                ) + this.car.angle;
            const start = { x: this.car.positionX, 
                            y:this.car.positionY
                        };
            const end = {
                    x:this.car.positionX - Math.sin(rayAngle)*this.rayLength,
                     y:this.car.positionY- Math.cos(rayAngle)*this.rayLength
            };
            this.rays.push([start,end]);
        }
    }


    draw(context){
        for(let i=0; i < this.rayCount; i++){
            context.beginPath();
            context.lineWidth=2;
            context.strokeStyle = "yellow";
     
             
            context.moveTo(this.rays[i]?.[0].x,this.rays[i]?.[0].y);

            context.lineTo(
                this.rays[i]?.[1].x,
                this.rays[i]?.[1].y
            );

            context.stroke();
        }


    }


}