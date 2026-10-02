// <<< ADD CONSTANTS HERE (if you need them)

function setup() {
  // <<< ADD YOUR CODE HERE
  createCanvas(500, 500)
  background("white")
  stroke("green")
  strokeWeight(20)
  arc(100, 300, 200, 200, 250, 340)
  noStroke()
  fill("lightgreen")
  circle(140 + 50, 210, 70)
  circle(140 + 15.5, 210 + 47.5, 70)
  circle(140 + 15.5, 210 - 47.5, 70)
  circle(140 - 44, 210 - 31.9, 70)
  circle(140 - 44, 210 + 31.9, 70)


  stroke("yellow")
  fill("yellow")
  strokeWeight(2)
  circle(140, 210, 65)

  stroke("green")
  noFill()
  strokeWeight(20)
  arc(350, 300, 200, 200, 250, 340)
  stroke("yellow")
  strokeWeight(2)
  fill("lightgreen")
  stroke("green")
  circle(410, 200, 80)
  circle(360, 250, 80)
  circle(310, 200, 80)
  circle(360, 150, 80)
  noStroke()
  fill("yellow")
  circle(360, 200, 65)
}
