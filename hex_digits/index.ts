function setup() {
  // Add your solution from the previous exercise here and
  // modify it to extract the binary digits of the number.function setup() {
  const num = Math.floor(random(0, 4096));
  const myNumber = num % 2
  const myNumber4 = Math.floor(num / 16) % 16
  const myNumber5 = Math.floor(num / 256) % 16
  const myNumber6 = Math.floor(num / 4096) % 16

  // Add the necessary code here
  createCanvas(600, 400)
  noFill()
  stroke("yellow")
  rect(195, 200, 50, 60)
  rect(275, 200, 50, 60)
  rect(355, 200, 50, 60)

  textAlign(CENTER, CENTER)
  textSize(24)
  noStroke()
  fill("yellow")
  text(myNumber4, 380, 230)
  text(myNumber5, 300, 230)
  text(myNumber6, 220, 230)

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);
  if (myNumber4 === 10) {
    text("A", 380, 230)
  }
  else if (myNumber4 === 11) {
    text("B", 380, 230)
  }
  else if (myNumber4 === 12) {
    text("C", 380, 230)
  } else if (myNumber4 === 13) {
    text("D", 380, 230)
  } else if (myNumber4 === 14) {
    text("E", 380, 230)
  }
  else if (myNumber4 === 15) {
    text("F", 380, 230)
  }

}