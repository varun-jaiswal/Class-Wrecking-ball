class Block {
     constructor(x,y){
        var width = 55
        var height = 55 
        var options= {
         isStatic:false,
         restitution:0.09,
        }
        this.body=Matter.Bodies.rectangle(x,y,width,height,options)
        Matter.World.add(world,this.body)
        this.width=width
        this.height=height
        
 }

 show(){
     push()
     strokeWeight(5)
     fill("skyBlue")
     rectMode(CENTER)
     rect(this.body.position.x,this.body.position.y,this.width,this.height)
     pop()
 }
}