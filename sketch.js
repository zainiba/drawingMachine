let noiseOffset = 0.0;
let strokeWidth = 15;
let gridArray = [];
let array = [];

function setup() {
  createCanvas(600, 600);
  drawGrid();
}

function draw() {
  strokeWeight(strokeWidth);

  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 50;


  if (mouseIsPressed) {
    // stroke(map(mouseX, 0, 600, 0, 255, true));
    line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);

  }

}

function keyTyped() {
  if (key === 's') {
    //save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    // display image
    for (let i = 0; i < array.length - 1; i++) {
       line(array[i][0], array[i],[1], array[i + 1][0], array[i + 1],[1]);
    }

  }
  return false;
}

function drawGrid() {
  numCells = 20
  fillColor = 255;
  noStroke();
  for (let i = 0; i <= numCells; i += 1) {
    gridArray[i] = [];
    for (let j = 0; j <= numCells; j += 1) {
      let x = i * width / numCells;
      let y = j * height / numCells;

      if (fillColor === 255) {
        fillColor = 200;
        gridArray[i][j] = 200;
      } else {
        fillColor = 255;
        gridArray[i][j] = 255;
      }
      fill(fillColor);
      rect(x, y, width / numCells, height / numCells)
    }
  }

}
