// Arrays and Object Notation
// Justin Nguyen

let space = 40;
let radius = space/2;
let number = 2;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(220);

  orbitControl();

  stroke(0);
  for (let i=0; i<number; i++) {
    for (let j=0; j<number; j++) {
      for (let k=0; k<number; k++) {
        push();
        let x = i*space;
        let y = j*space;
        let z = k*space;
        translate(x, y, z);
        sphere(radius);
        pop();
      }
    }
  }
  stroke(255, 0, 0);
  sphere(radius);
}
