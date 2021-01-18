class SiriusBlack{
    constructor(x,y,w,h){
    
        var b_options = {
    
            restitution : 1,
            friction:0.7,
            density:1
            
          }
            this.object = Bodies.rectangle(x,y,w,h,b_options)
            this.w = w;
            this.h = h;
            World.add(world,this.object)
            this.image=loadImage("sprites/base.png");
    }
    disrespect(){
        push();
        translate(this.object.position.x,this.object.position.y)  ;
        rotate(this.object.angle);
        fill("yellow");
      //  stroke("green")
       // strokeWeight(8)
        imageMode(CENTER)
        image(this.image,0,0,this.w,this.h);
        pop();
    }
    }