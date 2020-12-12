class Stone{
    constructor(x , y , width , height){
        var options = {
            isStatic:true
        }
        this.MindStone = Bodies.rectangle(800 , 50 , 50 , 50 , options)
        World.add(world , this.MindStone);
        this.image1=loadImage("images/MindStone.PNG")

        this.SoulStone = Bodies.rectangle(400 , 600 , 50 , 50 , options)
        World.add(world , this.SoulStone);
        this.image2=loadImage("images/SoulStone.PNG")

        this.TimeStone = Bodies.rectangle( 1950 , 500 , 50 , 50  , options)
        World.add(world , this.TimeStone);
        this.image3=loadImage("images/TimeStone.PNG")

        this.PowerStone = Bodies.rectangle(1600 , 1450 , 50 , 50  , options)
        World.add(world , this.PowerStone);
        this.image4=loadImage("images/PowerStone.PNG")

   
        this.RealityStone = Bodies.rectangle( 990 , 1050 , 50 , 50 , options)
        World.add(world , this.RealityStone);
        this.image5=loadImage("images/RealityStone.PNG")

        this.SpaceStone = Bodies.rectangle( 200 , 300 ,  80 , 80 , options)
        World.add(world , this.SpaceStone);
        this.image6=loadImage("images/SpaceStone.PNG")

        this.width = width
        this.height = height
        
    }
    display(){
        var pos1 = this.MindStone.position
        var pos2 = this.SoulStone.position
        var pos3 = this.TimeStone.position
        var pos4 = this.PowerStone.position
        var pos5 = this.RealityStone.position
        var pos6 = this.SpaceStone.position
        imageMode(CENTER);
    image(this.image1,pos1.x , pos1.y , 50 , 50);
    image(this.image2,pos2.x , pos2.y , 50 , 50);
    image(this.image3,pos3.x , pos3.y , 50 , 50);
    image(this.image4,pos4.x , pos4.y , 50 , 50);
    image(this.image5,pos5.x , pos5.y , 50 , 50);
    image(this.image6,pos6.x , pos6.y , 50 , 50);

    }
}