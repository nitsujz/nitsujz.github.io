// Arrays and Object Notation Assignment
// Justin Nguyen

let theSpheres = [];
let sizeSlider;
let colorSlider;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  sizeSlider = createSlider(0, 100);
  sizeSlider.position(10, 10);
  sizeSlider.size(150);

  colorSlider = createSlider(0, 255);
  colorSlider.position(200, 10);
  colorSlider.size(150);

  makeSpheres();
}

function draw() {
  background(220);

  let size = sizeSlider.value();
  let color = colorSlider.value();
  showSpheres();
  orbitControl();
}

function makeSpheres() {
  let someSpheres = {
    radius: random(0, 100),
    x: width/2,
    y: height/2,
    r: random(255),
    g: random(255),
    b: random(255),
  };
  theSpheres.push(someSpheres);
}


function showSpheres() {
  for (let spheres in theSpheres) {

    stroke(colorSlider.value());
    sphere(sizeSlider.value(), spheres.x, spheres.y);
  }
}
