class Sensor{
    constructor(car){
        this.car=car;
        this.rayLength = 110; //length of each ray
        this.rayCount = 5; //number of ray lines
        this.raySpread= Math.PI/2; //90 degrees for the angle of the array spread
        this.rays = [];
        this.readings = [];
    }

    update(roadBorders){
        this.#castRays();
        this.readings = [];
        for(let i=0; i< this.rays.length; i++ ){
            this.readings.push(
                this.#getReading(this.rays[i], roadBorders)
            );
        }
    }

    #getReading(ray,roadBorders){
        let contacts = [];

        for(let i = 0; i <roadBorders.length; i++){
            const contact = getIntersection(
                ray[0],
                ray[1],
                roadBorders[i][0],
                roadBorders[i][1]
            );
            if(contact){
                contacts.push(contact)
            }
        }

        if(contacts.length ===0 ){
            return null
        } else{
            const offsets = contacts.map(el => el.offset);
            const minOffset = Math.min(...offsets);
            return contacts.find(el => el.offset == minOffset);
        }
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
            let end = this.rays[i]?.[1];
            if(this.readings){
                end = this.readings[i];
            }
            context.beginPath();
            context.lineWidth=2;
            context.strokeStyle = "yellow";
     
             
            context.moveTo(this.rays[i]?.[0].x,
                            this.rays[i]?.[0].y);

            context.lineTo(
                end?.x,
                end?.y
            );

            context.stroke();

            context.beginPath();
            context.lineWidth=2;
            context.strokeStyle = "red";
     
             
            context.moveTo(this.rays[i]?.[1].x,this.rays[i]?.[1].y);

            context.lineTo(
                end?.x,
                end?.y
            );

            context.stroke();
        }


    }


}