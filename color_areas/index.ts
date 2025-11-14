function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();
    fill("orange")
    rect(0, 0, width / 3 , height)

    fill ("green")
    rect(width / 3, 0 ,width / 3 , height)

    fill("blue")
    rect(width / 3 * 2, 0, width / 3, height)

    fill("black")
    rect(0, 150 , width , 50)

    // <<< Add your code here
}

// <<< Add the function `moveClicked` with the required code here
function mouseClicked() {

    fill("black")
    rect(0, 150, width, 50)

    noStroke()
    fill("white")
    textSize(20)
    textAlign(CENTER, CENTER)

    let message: string

    if  (mouseX < width / 3) {
    message = "yellow" }
    else if (mouseX < width / 3 * 2 ) {
    message = "green"}
    else { message = "blue"}

    }
