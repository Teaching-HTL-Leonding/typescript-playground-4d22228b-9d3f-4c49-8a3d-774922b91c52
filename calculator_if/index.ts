const MARGIN_NUM = 10;

let num: string = "";          // Current number entered by the user
let lineHeight: number = 0;   // Height of a line of the responsive layout
let cellWidth: number = 0;    // Width of a cell of the responsive layout

function setup() {
    createCanvas(300, 600);
    lineHeight = height / 5;
    cellWidth = width / 3;
}

function draw() {
    background("lightgray");

    stroke("black")
    line(width / 3, height / 5, width / 3, height * 0.8)
    line(width / 3 * 2, height / 5, width / 3 * 2, height)
    line(0, height / 5, width, height / 5)
    line(0, height / 5 * 2, width, height / 5 * 2)
    line(0, height / 5 * 3, width, height / 5 * 3)
    line(0, height / 5 * 4, width, height / 5 * 4)

    noStroke()
    rect(0 + MARGIN_NUM, 0 + MARGIN_NUM, width - MARGIN_NUM * 2, height / 5 - MARGIN_NUM * 2)

    textAlign(RIGHT, CENTER);
    textSize(50)
    text(num, width - MARGIN_NUM * 2, width / 5)

    textAlign(CENTER, CENTER)
    textStyle(BOLD)
    text(0, width / 3, height * 0.90 )
    text("C", width * 0.83, height * 0.90 )
    text("3", width * 0.83, height * 0.70 )
    text("6", width * 0.83, height * 0.50 )
    text("9", width * 0.83, height * 0.30 )
    text("2", width * 0.5, height * 0.70 )
    text("5", width * 0.5, height * 0.50 )
    text("8", width * 0.5, height * 0.30 )
    text("1", width * 0.17, height * 0.70 )
    text("4", width * 0.17, height * 0.50 )
    text("7", width * 0.17, height * 0.30 )






}

function mouseClicked() {

    const x = floor(mouseX / cellWidth)
    const y = floor(mouseY / lineHeight)

    if (y === 1) {
        if (x === 0) {
            num += "7"
        }
        else if (x === 1) {
            num += 8
        }
        else if (x === 2) {
            num += 9
        }
    }
        if (y === 2) {
        if (x === 0) {
            num += 4
        }
        else if (x === 1) {
            num += 5
        }
        else if (x === 2) {
            num += 6
        }
    }
            if (y === 3) {
        if (x === 0) {
            num += 1
        }
        else if (x === 1) {
            num += 2
        }
        else if (x === 2) {
            num += 3
        }
    }

                if (y === 4) {
        if (x === 0) {
            num += 0
        }
        else if (x === 1) {
            num += 0
        }
        else if (x === 2) {
            num = ""
        }
    }


}