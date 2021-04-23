class Rope {
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA:bodyA, 
            bodyB:bodyB,
            stiffness: 0.3,
            length: 200,
            pointB:{x:this.offsetX, y:this.offsetY}
        }

        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pa = this.rope.bodyA.position;
        var pb = this.rope.bodyB.position;
        strokeWeight(5);
        fill('black');
        var A2x = pb.x+this.offsetX;
        var A2y = pb.y+this.offsetY;
        line(pa.x, pa.y, A2x, A2y);
    }
}