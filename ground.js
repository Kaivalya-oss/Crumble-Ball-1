class ground
{
    constructor(x,y,w,h)
    {
        var option={
            isStatic:true   
        }
        this.x = x;
        this.y = y; 
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h,option);
        World.add(world , this.body);
    }
    display()
    {
        var groundPos = this.body.postion;

        push()  
        translate(groundPos.x,groundPos.y);
        rectMode(CENTER)

        fill(130,130,130)
        rect(0,0,this.w,this.h);
        pop()
    }


}