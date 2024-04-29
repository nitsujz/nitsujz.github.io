// tetris
// Justin Nguyen

const grid = 
[[0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

const blocks = {
  I: [
    [1, 1, 1, 1]
  ],

  L: [
    [1, 0],
    [1, 0],
    [1, 1],
  ],

  U: [
    [0, 1],
    [0, 1],
    [1, 1],
  ],

  O: [
    [1, 1],
    [1, 1],
  ],

  S: [
    [1, 1, 0],
    [0, 1, 1],
  ],

  T: [
    [1, 1, 1],
    [0, 1, 0],
  ],

  Z: [
    [0, 1, 1],
    [1, 1, 0],
  ],
};

let currentBlock;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = height / grid.length;
}

function draw() {
  background(220);
  showGrid();
  
  currentBlock.update();
  currentBlock.draw();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    currentBlock.moveLeft();
  }
  else if (keyCode === RIGHT_ARROW) {
    currentBlock.moveRight();
  }
  else if (keyCode === DOWN_ARROW) {
    currentBlock.moveDown();
  }
}

function showGrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      fill("black");
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

class Block {
  constructor(shape) {
    this.shape = shape;
    this.x = Math.floor(cellSize / 2) - Math.floor(shape[0].length / 2); 
    this.y = 0; 
  }


  draw() {
    for (let y = 0; y < this.shape.length; y++) {
      for (let x = 0; x < this.shape[y].length; x++) {
        if (this.shape[y][x]) {
          fill(this.color);
          square((this.x + x) * cellSize, (this.y + y) * cellSize, cellSize);
        }
      }
    }
  }

  update() {
    this.moveDown();
  }
  addToGrid() {
    for (let y = 0; y < this.shape.length; y++) {
      for (let x = 0; x < this.shape[y].length; x++) {
        if (this.shape[y][x]) {
          grid[this.y + y][this.x + x] = 1;
        }
      }
    }
  }
}