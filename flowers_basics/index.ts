function setup() {
  createCanvas(500, 500)
  background("white")

  fill("lightgreen")
  noStroke()
  rect(0, 320, 500, 180)

  const color: string[] = ["red", "blue", "pink"]

  for (let x: number = 30; x < width; x += 80) {
    const y: number = random(230, 420)
    const gespiegelt = random() < 0.50
    const flowercolor = color[Math.floor(random(color.length))]

    blume(x, y, gespiegelt, flowercolor)
  }
}

function blume(x: number, y: number, gespiegelt: boolean, flowercolor: string) {

  push()
  translate(x, y)


  push()
  if (gespiegelt) {
    scale(-1, 1)
  }

  stroke("green")
  strokeWeight(10)
  noFill()
  arc(-10, 55, 100, 100, 250, 340)
  pop()


  noStroke()
  fill(flowercolor)
  circle(50 / 2, 0, 35)
  circle(15.5 / 2, 47.5 / 2, 35)
  circle(15.5 / 2, -47.5 / 2, 35)
  circle(-44 / 2, -31.9 / 2, 35)
  circle(-44 / 2, 31.9 / 2, 35)

  fill("yellow")
  circle(0, 0, 35)

  pop()


}