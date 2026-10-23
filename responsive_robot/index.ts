function setup() {
  createCanvas(400, 400);
  background("lightgray");

  // Define relative sizes and positions based on canvas width and height
  const headWidth: number = width * 0.50; // Head size as 50% of the canvas width
  const headHeight: number = height * 0.50; // Head size as 50% of the canvas height
  const headX: number = width / 2 - headWidth / 2; // Center the head horizontally
  const headY: number = height / 2 - headHeight / 2; // Center the head vertically

  // Draw the robot's head
  fill("gray");
  rect(headX, headY, headWidth, headHeight);

  line(width/2,headHeight/2, width/2, headHeight/4)
  fill("white")
  rect(width/2 - headWidth/2 * 0.5,headHeight/2 + headHeight * 0.70, headWidth/2, headWidth * 0.10)
  fill("black")
  circle(headWidth/2 + headWidth * 0.25, headHeight/2 + headHeight * 0.25, headWidth * 0.20)
  circle(headWidth + headWidth * 0.25, headHeight/2 + headHeight * 0.25, headWidth * 0.20)
  fill("white")
  circle(width/2, headHeight * 0.25, headWidth * 0.10 )
  
}
