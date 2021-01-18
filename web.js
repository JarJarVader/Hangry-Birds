class spyder{
    constructor(body1,pointB){
    
        var options = {
            bodyA  : body1,
            pointB : pointB,
            stiffness:0.2,
            length:3
            
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);
        this.pointB = pointB;
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");

    }
    
    breakConstraint(){

        this.chain.bodyA = null;
        
    }
    attach(body){
       this.chain.bodyA=body  
    }
    disrespect(){



        stroke(48,23,8)
        
       //var pointB 
    if (this.chain.bodyA){   
        var pointA = this.chain.bodyA.position; 

    strokeWeight(10);
    if(pointA.x <220){
    line(pointA.x - 20,pointA.y, this.pointB.x -20, this.pointB.y);
    line(pointA.x - 20,pointA.y, this.pointB.x +20, this.pointB.y -10);
    image(this.sling3,pointA.x - 30,pointA.y-5,15,20);
    } else {
        line(pointA.x +20,pointA.y, this.pointB.x -20, this.pointB.y);
        line(pointA.x +20,pointA.y, this.pointB.x +20, this.pointB.y -10);
        image(this.sling3,pointA.x +22,pointA.y-5,15,20);

    }
    
    }
    image(this.sling1,200,20);
    image(this.sling2,170,20);


}
}