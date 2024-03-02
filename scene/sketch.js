// Interactive scene
// Justin Nguyen

var gridSize
var space
var snake
var dir

document.addEventListener("keydown", function(k) {
  dir = k.code
})
  

function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER)
  frameRate(10);

  gridSize = 20;
  space = width/gridSize;

 snake = new Snake();

}

function draw() {
  background("black");

  snake.move();
  snake.edges();
  snake.show();
  
  noFill();
  stroke(10, 20, 30);
  strokeWeight(space)

  rect(width/2, height/2, width, height);
}

class Snake{
  constructor() {
    this.pos = createVector(500, 500);
  }

  move() {
    if (dir === "ArrowRight") {
      this.pos.x += space;
    }
    else if (dir === "ArrowLeft") {
      this.pos.x -= space;
    }
    else if (dir === "ArrowUp") {
      this.pos.y -= space;
    }
    else if (dir === "ArrowDown") {
      this.pos.y += space;
  }
  }

  edges() {
    if (this.pos.x === 0) {
      this.pos.x = width - space;
    }
    else if (this.pos.x === width) {
      this.pos.x = space;
    }
    else if (this.pos.y === 0) {
      this.pos.y = height - space;
    }
    else if (this.pos.y === height) {
      this.pos.y = space;
    }
  }

  show () {
    noStroke();
    fill(255);
    rect(this.pos.x, this.pos.y, space);
  }
}