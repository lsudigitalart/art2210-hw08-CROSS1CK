let r = 255
let b = 255
let g = 255
let gooberMaker = false;
let gooberW = 0;
let gooberH = 0;
let gooberM = 70;

function setup() {
  createCanvas(400, 400);
}

function draw(){
  background(220);
  translate(width/2, height/2);

  if(gooberMaker){
    gooberCreation(gooberW, gooberH, gooberM);
  }
}
function gooberCreation(gooberWidth, gooberHeight, gooberMouth) {
  
  // BODY
  fill(r-100,g-100,b-100);
  ellipse(0, 0, gooberWidth, gooberHeight);

  // MOUTH
  fill(150);
  circle(0, gooberHeight/8, gooberM);

  // EYES
  fill(r,g,b);
  circle(-gooberWidth/3, -gooberHeight/6, 40)
  circle(gooberWidth/3, -gooberHeight/6, 40)
}

function mousePressed() {
  gooberMaker = true;
  r= random(255)
  b= random(255)
  g= random(255)
  gooberW = random(100, 400)
  gooberH = random(100, 400)
  gooberM = random(100)
}
