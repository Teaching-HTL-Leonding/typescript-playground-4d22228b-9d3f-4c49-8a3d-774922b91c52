const SIZE = 400;    // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays.
// This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  colorMode(HSB)
}

let rayColor = 0;
function mouseMoved() {
  stroke(rayColor, 100, 100);
  rayColor = (rayColor + 0.75) % 360;
}

function draw() {
  background("black");
  strokeWeight(2);

  // <<< Add your code here
  for (let i = MARGIN; i <= SIZE - MARGIN; i += MARGIN) {
    line(MARGIN, i, mouseX, mouseY);
    line(width - MARGIN, i, mouseX, mouseY);


    line(i, MARGIN, mouseX, mouseY);
    line(i, height - MARGIN, mouseX, mouseY);

  }
}
