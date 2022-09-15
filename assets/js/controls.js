class Controls{

    constructor(){
        this.forwardMovement = false;
        this.leftMovement = false;
        this.rightMovement = false;
        this.backwardMovement = false;
        //# To make the function private
        this.#addKeyboardListeners();
    }

    #addKeyboardListeners(){
         document.onkeydown = (evt) => {
             switch(evt.key){
                case "ArrowUp" : this.forwardMovement = true
                break; 
                case "ArrowDown" : this.backwardMovement = true
                break; 
                case "ArrowLeft" : this.leftMovement = true
                break; 
                case "ArrowRight" : this.rightMovement = true
                break; 
             }
             console.table(this)
         } 
         document.onkeyup = (evt) => {
             switch(evt.key){
                case "ArrowUp" : this.forwardMovement = false
                break; 
                case "ArrowDown" : this.backwardMovement = false
                break; 
                case "ArrowLeft" : this.leftMovement = false
                break; 
                case "ArrowRight" : this.rightMovement = false
                break; 
             }
             console.table(this)

       } 

 
    }
}

