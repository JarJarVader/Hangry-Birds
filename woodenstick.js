class Firebolt extends SiriusBlack {
  constructor(x,y,w,h,angle){

      super(x,y,w,h);
      this.image=loadImage("sprites/wood2.png");
      Matter.Body.setAngle(this.object,angle);
    
  }

}