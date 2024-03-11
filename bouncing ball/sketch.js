// Bouncing ball
// Your Name
// Date
//
let x;
let y;
let dx;
let dy;
let radius = 25;
let r = 0;
let g = 0;
let b = 0;
let state = "start screen";

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  dx = random(1,15);
  dy = random(1,15);
  noStroke();
  changeCircleColour();
}

function draw() {
  if (state === "start screen") {
    background("black");
    showInstructions();
  }
  else if (state === "bouncing ball") {
    background(223);
    drawCircle();
    moveCircle();
    bounceOfWall();
  }
}

function showInstructions() {
  background(255);
  fill("white");
  textSize(42);
  textAlign(CENTER);
  text("Click the mouse to start", width/2, height/2);
}

function mousePressed() {
  if (state === "start screen") {
    state = "bouncing ball";
  }
}

function drawCircle() {
  fill(r, g, b);
  circle(x,y, radius * 2);
}

function moveCircle() {
  x += dx; 
  y += dy;
}

function bounceOfWall() {
  if (x + radius >= width || x - radius <= 0) {
    dx = -dx;
    changeCircleColour();
  }
  if (y + radius >= height || y - radius <= 0) {
    dy = -dy;
    changeCircleColour();
  }
}

function changeCircleColour() {
  r = random(255);
  g = random(255);
  b = random(255);
}