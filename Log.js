class Log
{
constructor(x,y,height,angle){
var options = {
restitution:0.8,
friction:1.5,
density:1
}
this.body=Bodies.rectangle(x,y,20,height,options)
this.width=20
this.height=height
Matter.Body.setAngle(this.body,angle)
World.add(world,this.body)
}
display(){
var angle=this.body.angle
var pos=this.body.position
console.log(angle)
push()
translate(pos.x,pos.y)
rotate(angle)
fill("brown")
stroke("yellow")
strokeWeight(5)
rectMode(CENTER)
rect(0,0,this.width,this.height)
pop()
}
}