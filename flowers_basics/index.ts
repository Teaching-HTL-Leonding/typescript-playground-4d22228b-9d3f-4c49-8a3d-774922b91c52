// <<< ADD CONSTANTS HERE (if you need them)

function setup() {
  createCanvas(1000, 1000)
  background("skyblue")

  stroke("green")
  noFill()
  strokeWeight(20)
  arc(160, 450, 500, 600, -70, 120)

  noFill()
  strokeWeight(20)
  arc(560, 450, 500, 600, -70, 120)

  fill("lightgreen")
  strokeWeight(1)
  circle(750, 200, 80)
  circle(700, 250, 80)
  circle(650, 200, 80)
  circle(700, 150, 80)

  fill("yellow")
  noStroke()
  circle(700, 200, 65)

  fill("lightgreen")
  circle(300 + 15.5, 200 - 47.5, 70)
  circle(350, 200, 70)
  circle(300 + 15.5, 247.5, 70)
  circle(300 - 44, 200 - 31.9, 70)
  circle(300 - 44, 200 + 31.9, 70)

  fill("yellow")
  circle(300, 200, 65)
}