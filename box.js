class Box{
    constructor(x,y,width,height) {
var options={
    restitution:0.2     
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    push();
    var angle=this.body.angle;
    translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
fill("green");
rect(0,0,this.width,this.height);
pop();
}






}






