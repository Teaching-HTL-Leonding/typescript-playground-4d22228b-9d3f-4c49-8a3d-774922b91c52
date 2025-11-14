function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();
    fill("orange")
    rect(0, 0, width / 3 , height)

    fill ("green")
    rect(width / 3, 0 width / 3 , height)

    fill("blue")
    rect(width / 3 * 2, 0, width / 3, height)

    fill("black")
    rect(0, 150 , width , 50)

}

let message: string

// <<stringthe function `moveClicked` with the required code here
function mouseClicked() {

    if  (mouseX < width / 3) {
    message = "yellow" }

    }
}