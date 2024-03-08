// Project Title
// Your Name
// Date

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let hit = false;

  background(255);
  circle(200, 200, 100);
  point(mouseX, mouseY);

  hit = collidePointCircle(mouseX, mouseY, 200, 200, 100);

  stroke(hit ? color("red") : 0);
  print("colliding?", hit);

}
