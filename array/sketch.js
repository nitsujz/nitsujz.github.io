// Arrays and Object Notation
// Justin Nguyen

let theSpheres = [];
let slider;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  makeSpheres();
  
}

function draw() {
  background(220);
  showSpheres();
  orbitControl();
}
function makeSpheres() {
  let someSpheres = {
    radius: random(50, 100),
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
    fill(spheres.r, spheres.g, spheres.b);
    sphere(spheres.radius, spheres.x, spheres.y);
  }
}
