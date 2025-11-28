function setup() {
  // Add your solution from the previous exercise here and
  // modify it to extract the binary digits of the number.function setup() {
  const num = Math.floor(random(0, 64));
  const myNumber = num % 2
  const myNumber2 = Math.floor(num / 2) % 2
  const myNumber3 = Math.floor(num / 4) % 2
  const myNumber4 = Math.floor(num / 8) % 2
  const myNumber5 = Math.floor(num / 16) % 2
  const myNumber6 = Math.floor(num / 32) % 2

  // Add the necessary code here
  createCanvas(600, 400)
  noFill()
  stroke("yellow")
  rect(70, 200, 50, 60)
  rect(150, 200, 50, 60)
  rect(230, 200, 50, 60)
  rect(310, 200, 50, 60)
  rect(390, 200, 50, 60)
  rect(470, 200, 50, 60)

  textAlign(CENTER, CENTER)
  textSize(24)
  noStroke()
  fill("yellow")
  text(myNumber, 495, 230)
  text(myNumber2, 415, 230)
  text(myNumber3, 335, 230)
  text(myNumber4, 255, 230)
  text(myNumber5, 175, 230)
  text(myNumber6, 95, 230)

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);


}
