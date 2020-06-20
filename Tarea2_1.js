et a = 400;
let  b = 400;

function setup() {
  createCanvas(400, 400);
  }

function     draw(){
  
  a = a+1;
  b = b-1;
  background(350);
  fill (255, 255, 255)
  square(0, 0,0);
  fill (50, 50, 50);
  circle(a, a, 40);
  circle(b, a, 40);
  circle(a, b, 40);
  circle(b, b, 40);
    if(a > 400){
    a = 150, b =250 }
}
