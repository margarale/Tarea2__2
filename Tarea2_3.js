let  a=150
let b = 250;
let c = 400

function setup() {
  createCanvas(500, 500);
  }

function draw() {

  if (b < 0){
    noLoop();
  }
  
  a = a-.10;
  b = b-.8;
  c = c-.6;
  
  background(220);
  fill (92, 150, 52)
  rect( a, a);
  fill (200, 182, 150);
  arc(c, c, b, b, 0, PI+PI);

}
