function setup() {
    createCanvas(360, 200)
    colorMode(HSB)
}




function mouseMoved() {
    noStroke()
    fill(mouseX, mouseY, 100)
    rect(0, 0, 360, 100)

}

function mouseClicked() {
    noStroke()
    fill(mouseX, mouseY, 100)
    rect(0, 100, 360, 100)

    fill("black")
    strokeWeight(1)
    stroke("black")
    text(`H: ${round(mouseX)}, S: ${round(mouseY)}, B: 100`, 5, 195)


}