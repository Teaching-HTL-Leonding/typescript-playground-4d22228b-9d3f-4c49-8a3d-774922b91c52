function setup() {
  createCanvas(200, 200);
}

function mouseMoved() {
  background("aqua")
  stroke("black")
  noFill()
  strokeWeight(1.5)
  circle(mouseX, mouseY 20)
  circle(mouseX, mouseY 10)
  line (mouseX-15, mouseY, mouseX+15, mouseY)
  line(mouseX, mouseY+15, mouseX, mouseY-15)
  // Add your code here
}
