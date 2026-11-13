function setup() {
  createCanvas(200, 200);
  background("lightblue");
  noStroke()
  fill("cyan")
  circle(0, 0, 15)
}

let clickposition: string = "0/0"

function mouseClicked() {
  background("lightblue")
  noStroke()
  fill("cyan")
  circle(mouseX, mouseY, 15)

  fill("black")
    clickposition = `${clickposition}, ${round(mouseX)}/${round(mouseY)}`
  text (clickposition, 5, 5, 200 - 10, 200)


}
