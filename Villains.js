class   Villains{
    constructor(){
        var options = {
            isStatic:true
        }
        

        this.Thanos = Bodies.rectangle( 1420 , 1035 , 225, 500 , {isStatic:false,restitution:2,density:1})
        World.add(world , this.Thanos);
        this.image1=loadImage("images/Thanos.PNG")

        this.BounsyAliens1 = Bodies.rectangle( 1800 , 250 , 100 , 100 , options)
        World.add(world , this.BounsyAliens1);
        this.image2=loadImage("images/BounsyAliens1.PNG")

        this.BounsyAliens2 = Bodies.rectangle( 1800 , 1400 , 100 , 100 , options)
        World.add(world , this.BounsyAliens2);
        this.image3=loadImage("images/BounsyAliens2.PNG")
    }
    display(){
        var pos1 = this.Thanos.position
        var pos2 = this.BounsyAliens1.position
        var pos3 = this.BounsyAliens2.position
        imageMode(CENTER);
    image(this.image1,pos1.x , pos1.y , 225 , 500);
    image(this.image2,pos2.x , pos2.y , 100 , 100);
    image(this.image3,pos3.x , pos3.y , 100 , 100);
    }
}