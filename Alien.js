class Alien{
    constructor(x , y , width , height){
        var options = {
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y ,width ,height , options)
        World.add(world , this.body);
        this.width = width
        this.height = height
        this.image=loadImage("images/Aliens.PNG")
        Matter.Body.setVelocity(this.body, {x:20,y:0})
    }
    display(){
        var pos = this.body.position
        imageMode(CENTER);
        image(this.image,pos.x , pos.y , this.width , this.height);
        

    }
}