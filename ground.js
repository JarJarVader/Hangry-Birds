class QuidditchPitch{
    constructor(x,y,w,h){
    
        var g_options = {
    
           isStatic:true
          }
          this.w=w
          this.h=h
          this.ground = Bodies.rectangle(x,y,this.w,this.h,g_options);
          World.add(world,this.ground);
          
    }
    disrespect(){
        fill("grey");
    rectMode(CENTER)
    rect(this.ground.position.x,this.ground.position.y,this.w,this.h)
    }
    }