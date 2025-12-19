const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
// This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
  colorMode(HSB)

  strokeWeight(1);
  stroke("lime");

  let color = 0

  for (let i = MARGIN; i < SIZE; i += MARGIN) {
    stroke(color, 100, 100)
    for (let i2 = MARGIN; i2 < SIZE; i2 += MARGIN) {
      line(SIZE - 50, i2, MARGIN, i)
        color = (color + 60) % 360;
    }
  }

  // <<< Add your code here
}
