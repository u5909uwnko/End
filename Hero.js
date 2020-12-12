class   Hero{
    constructor(){
        var options = {
            isStatic:true
        }

         this.Thor = Bodies.rectangle( 200 , 1400 , 100 ,80, options)
        World.add(world , this.Thor);
        this.image1=loadImage("images/Thor.PNG")

        this.SpiderMan = Bodies.rectangle( 60 , 60 , 80 ,80 , options)
        World.add(world , this.SpiderMan);
        this.image2=loadImage("images/SpiderMan.PNG")

        this.Hulk = Bodies.rectangle( 920 , 70 ,100 ,100 , options)
        World.add(world , this.Hulk);
        this.image3=loadImage("images/Hulk.PNG")

        this.CaptainAmerica = Bodies.rectangle( 1620 , 620 ,100 ,100 , options)
        World.add(world , this.CaptainAmerica);
        this.image4=loadImage("images/CaptainAmerica.PNG")

        this.IronMan = Bodies.rectangle( 530 , 680 , 100 , 150  , options)
        World.add(world , this.IronMan);
        this.image5=loadImage("images/IronMan.PNG")



    }
    display(){
        var pos1 = this.Thor.position
        var pos2 = this.SpiderMan.position
        var pos3 = this.Hulk.position
        var pos4 = this.CaptainAmerica.position
        var pos5 = this.IronMan.position
        imageMode(CENTER);
    image(this.image1,pos1.x , pos1.y , 100 ,80);
    image(this.image2,pos2.x , pos2.y ,80 ,80);
    image(this.image3,pos3.x , pos3.y ,100 ,100);
    image(this.image4,pos4.x , pos4.y , 100 ,100);
    image(this.image5,pos5.x , pos5.y , 100 ,150);
  
    }
}