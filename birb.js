class Feather extends SiriusBlack{
    constructor(x,y,w,h){

      
    super(x,y,w,h)
    this.image=loadImage("sprites/bird.png");
    this.image1=loadImage("sprites/smoke.png");
    this.tragedy = [];
    Matter.Body.setDensity(this.object, 5)

    }
    disrespect(){
        //this.object.position.x = mouseX
        //this.object.position.y = mouseY

        super.disrespect();
      // capture bird position only....
        if(this.object.velocity.x >10 && this.object.position.x>220){
        var birdpos = [this.object.position.x,this.object.position.y];
        this.tragedy.push(birdpos)
        // [x1,y1],[x2,y2].......[xn,yn]
        }

       for(var i=0; i<this.tragedy.length;i++){
        
            image(this.image1,this.tragedy[i][0],this.tragedy[i][1])
            
        }
    }
    }