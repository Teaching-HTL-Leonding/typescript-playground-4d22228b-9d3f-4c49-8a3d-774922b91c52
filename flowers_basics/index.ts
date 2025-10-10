const BLUMEEINFACHDURCHMESSER = 80
const BLUMESCHWERDURCHMESSER = 70
const KREISX = 300

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
  circle(750, 200, BLUMEEINFACHDURCHMESSER)
  circle(700, 250, BLUMEEINFACHDURCHMESSER)
  circle(650, 200, BLUMEEINFACHDURCHMESSER)
  circle(700, 150, BLUMEEINFACHDURCHMESSER)

  fill("yellow")
  noStroke()
  circle(700, 200, 65)

  fill("lightgreen")
  circle(KREISX + 15.5, 200 - 47.5, BLUMESCHWERDURCHMESSER)
  circle(350, 200, BLUMESCHWERDURCHMESSER)
  circle(KREISX + 15.5, 247.5, BLUMESCHWERDURCHMESSER)
  circle(KREISX - 44, 200 - 31.9, BLUMESCHWERDURCHMESSER)
  circle(KREISX - 44, 200 + 31.9, BLUMESCHWERDURCHMESSER)

  fill("yellow")
  circle(300, 200, 65)
}