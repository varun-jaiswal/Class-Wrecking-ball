var world,engine,body
var block1 , block2 , block3 , block4 , block5 , block6 , ground
var ball , launcher , pB
var block7 , block12 , block8, block9 , block10 , block11

function preload(){


}

function setup(){
 createCanvas(1000,500)
 var point={
     x:330,
     y:50
 } 

 engine=Matter.Engine.create()
 world=engine.world

 block1=new Block (550,50)
 block2=new Block (550,50)
 block3=new Block (550,50)
 block4=new Block (550,50)
 block5=new Block (550,50)
 block6=new Block (550,50)
 block7=new Block (650,50)
 block8=new Block (650,50)
 block9=new Block (650,50)
 block10=new Block (650,50)
 block11=new Block (650,50)
 block12=new Block (650,50)

 ground=new Ground(1000,500)
 ball= new Ball(200,250)
 launcher=new Launcher(ball.body,point)


}

function draw(){
    background(128,128,128)
    Matter.Engine.update(engine)

    block1.show()
    block2.show()
    block3.show()
    block4.show()
    block5.show()
    block6.show()
    block7.show()
    block8.show()
    block9.show()
    block10.show()
    block11.show()
    block12.show()

    ground.show()
    ball.show()
    launcher.show()

    

}

function mouseDragged() {
            Matter.Body.setPosition(ball.body,{
                x : mouseX , 
                y : mouseY  })
        
}