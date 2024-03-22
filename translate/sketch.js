// translate/rotate

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);
  orbitControl();
  
  translate(200, 200);
  rotate(mouseX);
  box(80, 80);
}
