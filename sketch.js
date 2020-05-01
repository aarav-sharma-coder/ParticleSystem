var p ;
var particles = [];

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(0);
  p = new Particle();
  particles.push(p);
for(var i = particles.length-1;i>=0;i--){
  particles[i].show();
  particles[i].update();
  if(particles[i].finished()){
    particles.splice(i,1);
  }
}

}