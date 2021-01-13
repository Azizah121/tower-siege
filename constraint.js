class Constraints{
    constructor (x,y){
        var options={
bodyA:x,
pointB:y,
length:15,
stiffness:0.04
        }
        this.slingshot=Constraint.create(options);
        Matter.World.add(world,this.slingshot);
    }
    display(){
        if(this.slingshot.bodyA!=null ){
        var pointA=this.slingshot.bodyA.position;
        var pointB=this.slingshot.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x+20,pointB.y+25);
        line(pointA.x,pointA.y,pointB.x-20,pointB.y+30);
        }
       
    }
    fly(){
        this.slingshot.bodyA=null;
    }
}