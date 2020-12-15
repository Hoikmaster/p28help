class Rock{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }     
        
        this.x=x;
        this.y=y;
        this.r = r;
        
        this.image = loadImage("stone.png");
       // this.image.scale=0.01
        this.body = Bodies.circle(x, y, r,options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;    
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        imageMode(CENTER);
     //   ellipseMode(CENTER);
        image( this.image,0, 0,this.r,this.r);
        pop();
      }
}