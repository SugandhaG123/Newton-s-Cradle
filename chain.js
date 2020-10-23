
class chain{

    constructor(body1,body2,offsetX,offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA: body1,
            bodyB: body2,
           pointB:{x:this.offsetX,y:this.offsetY}
        }
         this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display()
    {
        stroke("black");
        strokeWeight(1.5);
         var pointA = this.chain.bodyA.position;
        var  pointB = this.chain.bodyB.position;
        var a = pointB.x+this.offsetX;
        var b = pointB.y+this.offsetY;
        line(pointA.x,pointA.y, a,b);
    }
}

