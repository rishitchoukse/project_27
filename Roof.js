class Roof {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true
      }
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, width, height, options);
     
      this.x=x;
      this.y=y;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("pink");
      rect(pos.x, pos.y, this.width, this.height);
      Push() ;
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill("pink");
       rect(0,0,this.w, this.h);
        pop();
      
    }
  };