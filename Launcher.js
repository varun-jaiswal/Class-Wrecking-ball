class Launcher {
    constructor(bA,pB){
        var option={
            bodyA:bA,
            pointB:pB,
            stiffness:0.09,
            length:250
        }
        this.launcher=Matter.Constraint.create(option)
        Matter.World.add(world,this.launcher)
    }

    show(){
        push()
        strokeWeight(6);
        line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.launcher.pointB.x,this.launcher.pointB.y)
        pop()
    }
}