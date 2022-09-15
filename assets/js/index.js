const _ = function(el){
   return document.querySelector(el);
}

const canvas = (_('#canvas'));

//To set canvas height to be the full window height
canvas.width = 200;



//Section To draw on the canvas
const context = canvas.getContext("2d");

//create a new car
const car = new Car(100,100,30,50);
car.draw(context);



//Animation to moke the car
function animate(){
   car.update();
   //After an update we need to resize the canvas
   canvas.height = window.innerHeight;
   car.draw(context);
   //This calls the animatecar method over and over again
   //Updating the car's position
   requestAnimationFrame(animate);
}

animate();

