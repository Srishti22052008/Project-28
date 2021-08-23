    class ground 
    {
        constructor(x,y,w,h)
        {
            var option=
            {
                isStactic:true
            }
            this.x=x;
            this.y=y;
            this.w=w;
            this.h=h;


            this. body=bodies.rectangle(x,y,w,h,option);
             world.add (world,this.body);
           
            

        }
    }

    display()
    {
        var groundpos=this.body.postion;
        
        push()
        translate(groundpos.x,groundpos.y);
        rectMode(CENTER)
        rect(0,0,this.w,this.h);
        pop()

    }





