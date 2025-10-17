function setup() {
  createCanvas(400, 400);
  background("lightgray");

  // Define relative sizes and positions based on canvas width and height
  const headWidth = width * 0.50; // Head size as 50% of the canvas width
  const headHeight = height * 0.50; // Head size as 50% of the canvas width
  const headX = width / 2 - headWidth / 2; // Center the head horizontally
  const headY = height / 2 - headHeight / 2; // Center the head vertically
  const EYEY = headHeight * 0.75
  const EYED = min(headWidth, headHeight) * 0.20


  // Draw the robot's head
  fill("gray");
  rect(headX, headY, headWidth, headHeight);
  line(headWidth, headHeight * 0.50, headWidth, headHeight * 0.25)
  fill("white")
  rect(headWidth * 0.75, headHeight * 1.20, headWidth * 0.50, headHeight * 0.10)
  circle(headWidth, headHeight * 0.25, Math.min(headWidth, headHeight) * 0.10)
  fill("black")
  circle(headWidth * 0.75, EYEY, EYED)
  circle(headWidth * 1.25, EYEY, EYED)



  // Add your code here
}
