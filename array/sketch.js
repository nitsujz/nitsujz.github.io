// Arrays and Object Notation
// Justin Nguyen

let theSpheres = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(220);

  orbitControl();

}
function makeSpheres() {
  let spheres = {
    radius: random(50, 100),
    x: width/2,
    y: height/2,
    r: random(255),
    g: random(255),
    b: random(255),
  };
  theSpheres.push(spheres);
}