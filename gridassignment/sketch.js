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
  [0, 0, 0, 0, 0, 0],];

const blocks = {
  I: [
    [1, 1, 1, 1]
  ],

  L: [
    [1, 0],
    [1, 0],
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

let cellSize;
const GRID_SIZE = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  noStroke();
  cellSize = height/grid.length;
}

function draw() {
  background("220");

  displayGrid();
  blocksFall();
}

function displayGrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      fill("black");
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function blocksFall() {

}
 