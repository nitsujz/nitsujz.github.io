// Interactive scene
// Justin Nguyen

let gridSize;
let space;
let snake;
let dir;
let food;


document.addEventListener("keydown", function(k) {
  dir = k.code;
});

function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
  frameRate(10);

  gridSize = 20;
  space = width/gridSize;

  snake = new Snake();
  food = new Food();
}

function draw() {
  background("black");

  snake.move();
  snake.edges();
  snake.eat();
  snake.tail();
  snake.show();

  food.show();
  

  noFill();
  noStroke();
  rect(width/2, height/2, width, height);
}

class Snake{
  constructor() {
    this.pos = createVector(500, 500);

    this.length = 1;

    this.oldPos = [this.pos];
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

  eat() {
    if (this.pos.x === food.x && this.pos.y === food.y) {
      food.newPosition();
      this.length += 1;
    }
  }

  tail() {
    this.oldPos.push(this.pos.copy());

    if (this.oldPos.length > this.length) {
      this.oldPos.splice(0, 1);
    }
  }

  show () {
    noStroke();
    fill("violet");
    for (let i = 0; i < this.oldPos.length; i++) {
      rect(this.oldPos[i].x, this.oldPos[i].y, space - 5);
    }
  }
}

class Food {
  constructor() {
    this.x = floor(random(1, gridSize)) * space;
    this.y = floor(random(2, gridSize)) * space;
  }

  newPosition() {
    let newX = floor(random(1, gridSize)) * space;
    let newY = floor(random(1, gridSize)) * space;

    for (let i = 0; i < snake.oldPos.length; i++) {
      if (newX === snake.oldPos[i].x && newY === snake.oldPos[i].y) {
        break;
      }
      else {
        if (i === snake.oldPos.length - 1) {
          this.x = newX;
          this.y = newY;
        }
      }
    }
  }

  show() {
    noStroke();
    fill("black");
    rect(this.x, this.y, space / 2);
  }
}

