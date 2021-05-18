class Ground {
    constructor(x,y){
       var width = 10000
       var height = 50 
       var options= {
        isStatic:true,
        restitution:0.09,
       }
       this.body=Matter.Bodies.rectangle(x,y,width,height,options)
       Matter.World.add(world,this.body)
       this.width=width
       this.height=height
       
}

show(){
    push()
    rectMode(CENTER)
    strokeWeight(4);
    fill(1000,0,1000)
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
    pop()
}
}