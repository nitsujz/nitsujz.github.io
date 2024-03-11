// Interactive scene
// Justin Nguyen

//make variables
let gridSize;
let space;
let snake;
let dir;
let food;

document.addEventListener("keydown", function(k) {
  dir = k.code;
});

function setup() {
  //set up screen
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

  //call character functions
  if (!snake.dead) {
    snake.move();
    snake.edges();
    snake.eat();
    snake.tail();
    snake.show();
    food.show();  
  }
  else {
    snake.dead;
    background("black");
    textSize(100);
    text("Game over, width/2, height/2");
    textSize(70);
    text("You're dead, width/2, (height/2) + 50");
  }

  noFill();
  noStroke();
  rect(width/2, height/2, width, height);
}
function keyPressed() {
  if (snake.dead === true) {
    snake.dead = !snake.dead;
  }
}

//character
class Snake{
  constructor() {
    this.pos = createVector(500, 500);

    this.length = 1;

    this.oldPos = [this.pos];

    this.dead = false;
  }
  //use arrows to move snake
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

  //make snake dies when it gets out of screen
  edges() {
    if (this.pos.x === 0 || this.pos.x === width || this.pos.y === 0 || this.pos.y === height) {
      this.dead = true;
    }
    for (let i = 0; i < this.oldPos.length -1; i++) {
      if (this.pos.x === this.oldPos[i].x && this.pos.y === this.oldPos[i].y) {
        this.dead = true;
      }
    }
  }

  //eat the apple 
  eat() {
    if (this.pos.x === food.x && this.pos.y === food.y) {
      food.newPosition();
      this.length += 1;
    }
  }

  //make the snake longer after eating the apples
  tail() {
    this.oldPos.push(this.pos.copy());

    if (this.oldPos.length > this.length) {
      this.oldPos.splice(0, 1);
    }
  }

  show () {
    noStroke();
    fill(0, 255, 30);
    for (let i = 0; i < this.oldPos.length; i++) {
      rect(this.oldPos[i].x, this.oldPos[i].y, space - 5);
    }
  }
}

class Food {
  constructor() {
    this.x = floor(random(1, gridSize)) * space;
    this.y = floor(random(1, gridSize)) * space;
  }

  //make apples randomly respawn
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
    fill(255, 0, 0);
    rect(this.x, this.y, space / 2);
  }
}