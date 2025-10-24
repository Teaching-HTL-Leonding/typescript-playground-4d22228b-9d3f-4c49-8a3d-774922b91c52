function setup() {
    createCanvas(500, 500)
    background("black")
    stroke("red")
    strokeWeight(3)
    noFill()
}

let lastClickX: number = 0
let lastClickY: number = 0

function mouseClicked() {
    let a = mouseY - lastClickY
    let b = mouseX - lastClickX
    let c = sqrt(a * a + b * b)
    let diameter = 2 * c
    line(mouseX, mouseY, lastClickX,  mouseY)
    line(mouseX, mouseY , lastClickX, lastClickY)
    line(lastClickX, lastClickY, lastClickX , mouseY )
    arc(lastClickX, mouseY, 40, 40, 90, 90,)
    lastClickX = mouseX
    lastClickY = mouseY
    circle(mouseX, mouseY, diameter)
    
}

