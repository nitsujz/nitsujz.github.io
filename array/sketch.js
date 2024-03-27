// Arrays and Object Notation Assignment
// Justin Nguyen

let theSpheres = [];
let slider;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  createSlider(100, 30);
  slider.position(100, 30);
  slider.size(100);

  makeSpheres();
}

function draw() {
  background(220);
  showSpheres();
  orbitControl();
  let a = slider.value();
  
}

function makeSpheres() {
  let someSpheres = {
    radius: random(40, 70),
    x: width/2,
    y: height/2,
    r: random(255),
    g: random(255),
    b: random(255),
    alpha: random(255),

  };
  theSpheres.push(someSpheres);
}

function showSpheres() {
  for (let spheres in theSpheres) {
    fill(spheres.r, spheres.g, spheres.b);
    sphere(spheres.radius, spheres.x, spheres.y);
  }
}