function setup() {
  createCanvas(200, 200);
  background("lightblue");
}

function mouseMoved() {
  const snap: number = 40; // marker must snap every 40 pixels
  const markerSize: number = 10; // size of marker

  background("lightblue");

  // Tip: text("Hello", 10, 20) draws text at 10/20.
  // Backticks and ${...} insert values into text, e.g. `${x}/${y}`.
  // Add your code here

  const x: number = round(mouseX / snap) * snap;
  const y: number = round(mouseY / snap) * snap

  stroke("white")
  line(x - markerSize, y, x + markerSize, y)
  line(x, y - markerSize, x, y + markerSize);
  noStroke();
  text(`${x}, ${y}`, 15, height - 10);

}
