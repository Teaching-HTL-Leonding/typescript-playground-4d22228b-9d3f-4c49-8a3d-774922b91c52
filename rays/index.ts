const SIZE = 400;  // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays.
// This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
}

function mouseMoved() {
  background("black");
  strokeWeight(2);

  let M = MARGIN
  for (let M = MARGIN; M < SIZE; M += MARGIN) {
    stroke("green")
    line(mouseX, mouseY, M, MARGIN)
  }

  for (let M = MARGIN; M < SIZE; M += MARGIN) {
    stroke("green")
    line(mouseX, mouseY, M, SIZE - MARGIN)
  }

  for (let M = MARGIN; M < SIZE; M += MARGIN) {
    stroke("yellow")
    line(MARGIN, MARGIN + M - MARGIN, mouseX, mouseY)
  }

  for (let M = MARGIN; M < SIZE - MARGIN * 2; M += MARGIN) {
    stroke("yellow")
    line(SIZE - MARGIN, MARGIN + M, mouseX, mouseY)
  }
}
