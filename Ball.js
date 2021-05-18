class Ball {
    constructor(x,y){
       var r = 60  
       var options= {
        isStatic:false,
        restitution:0.09,
       }
       this.body=Matter.Bodies.circle(x,y,r,options)
       Matter.World.add(world,this.body)
       this.r=r
       
       
}

show(){
    push()
    ellipseMode(CENTER)
    strokeWeight(4);
			fill(255)
    ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
    pop()
}
}