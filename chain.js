class Chain{
    constructor(bodyA,bodyB){
        var Option={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
   this.chain= Constraint.create(Option);
    World.add(world,this.chain);
    
    }
    
    display()
    {
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);  

    }
}