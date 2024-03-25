//Bubble movement demo
//Object Notatio and Arrays demo

let theBubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let i = 0; i < 5; i++) {
    spawnBubble();
  }

  //spawn new bubble every half second
  window.setInterval(spawnBubble, 50);
}

function draw() {
  background("white");

  // moveBubbleRandomly();
  moveBubbleWithNoise();
  displayBubble();
}

function spawnBubble() {
  let someBubble = {
    size: random(10, 30),
    x: random(width),
    y: random(height),
    speed: 3,
    r: random(255),
    g: random(255),
    b: random(255),
    alpha: random(255),
    timeX: random(100000000),
    timeY: random(100000000), 
    deltaTime: 0.01,
  };
  theBubbles.push(someBubble);
}

function displayBubble() {
  for (let bubble of theBubbles) {
    fill(bubble.r, bubble.g, bubble.b, bubble.alpha);
    circle(bubble.x, bubble.y, bubble.size);
  }
}

function moveBubbleRandomly() {
  for (let bubble of theBubbles) {
    let choice = random(100);
    if (choice < 25) {
      //move up
      bubble.y -= bubble.speed;
    }
    else if (choice < 50) {
      //move down
      bubble.y += bubble.speed;
    }
    else if (choice < 75) {
      //move right
      bubble.x += bubble.speed;
    }
    else {
      //move left
      bubble.x -= bubble.speed;
    }
  }
}

function moveBubbleWithNoise() {
  for (let bubble of theBubbles) {
    //figure out where to be 
    let x = noise(bubble.timeX) * width;
    let y = noise(bubble.timeY) * height;

    //set the bubble objects location
    bubble.x = x;
    bubble.y = y;

    //increment timeX and timeY
    bubble.timeX += bubble.deltaTime;
    bubble.timeY += bubble.deltaTime;
  }
}