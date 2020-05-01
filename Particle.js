class Particle{
  constructor(){
    this.x = 200;
    this.y = 380;
    this.vx = random(-1,1);
    this.vy = random(-5,-1);
    this.alpha = 200;
  }
 finished(){
    if(this.alpha<0){
      return true;
    }
    else {
      return false;
    }
  } 
  update(){
    this.x  += this.vx;
    this.y +=this.vy
    this.alpha-=3.5;
  }

  show(){
    noStroke();
    fill(255,this.alpha)
    ellipse(this.x , this.y , 17);
  }
  
  
}
  