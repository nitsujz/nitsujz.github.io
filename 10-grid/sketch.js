// 2D Grid

//use this for a hard coding level

// let grid = [[1, 0, 0, 1],
//             [0, 1, 0, 1],
//             [0, 0, 0, 1],
//             [1, 1, 0, 0],
//             [1, 0, 1, 1],
//             [0, 0, 0, 1],
//             [0, 0, 1, 1],
//             [0, 1, 0, 1]];

let grid;
let cellSize;
const GRID_SIZE = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //randomizeing the grid
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);

  cellSize  = height/grid.length;
}

function draw() {
  background(220);
  displayGrid();
}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  }

  if (key === "e") {
    grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  if (x < GRID_SIZE && y < GRID_SIZE) {
    toggleCell(x, y);
  }

  
}

function toggleCell(x, y) {
  //toggle the color of the cell
  if (grid[y][x] === 0) {
    grid[y][x] = 1;
  }
  else {
    grid[y][x] = 0;
  }
}

function displayGrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 1) {
        fill("black");
      }
      else {
        fill("white");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function generateRandomGrid(cols, rows) {
  let emptyArray = [];
  
  for (let y = 0; y < rows; y++) {
    emptyArray.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

function generateEmptyGrid(cols, rows) {
  let emptyArray = [];
  for (let y = 0; y < rows; y++) {
    emptyArray.push([]);
    for (let x = 0; x < cols; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}