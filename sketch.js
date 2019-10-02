function setup() {
  createCanvas(600, 600);
  background(200);
  strokeWeight(15);
  
}

function draw() {

if (mouseIsPressed) {
  stroke(map(mouseX, 0, 600, 0, 255, true));
  line(mouseX, mouseY, pmouseX, pmouseY);
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);

}

}

function keyTyped() {
  console.log(`key ${key} is beign typed`);

  if (key === 's') {
    //save this image
    saveCanvas('fileName', 'png');
  }
  return false;
}
