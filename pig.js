class Pork extends SiriusBlack {
    constructor(x,y,w,h){

        super(x,y,w,h);
        this.image=loadImage("sprites/enemy.png");

        this.visible=255;
    }
disrespect(){
    if(this.object.speed<3){
    super.disrespect()
    }
    else{
    World.remove(world,this.object)
    push()
    tint(255,this.visible)
    this.visible=this.visible-5
    image(this.image,this.object.position.x,this.object.position.y,50,50)
    pop()
    }
}
 scoré(){
if(this.visible>=-500 && this.visible<0){
scoré++
}
}
}