function setup() {
    createCanvas(300, 300);
}

let DiamondX = 100
let DiamondY = 50
let directionX = 2;
let directionY = 2;
let countdown = 10

function draw() {
    background("gold");
    stroke("white")
    strokeWeight(5)

    line(DiamondX + 50, DiamondY - 50, DiamondX + 75, DiamondY - 25)
    line(DiamondX + 50, DiamondY - 50, DiamondX + 25, DiamondY - 25)
    line(DiamondX + 75, DiamondY - 25, DiamondX + 50, DiamondY)
    line(DiamondX + 25, DiamondY - 25, DiamondX + 50, DiamondY)

    DiamondX += directionX
    DiamondY += directionY

    noStroke();
    fill("black");
    textSize(15);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);

    if (DiamondX <= 0 - 25 || DiamondX >= height - 75) {
        directionX *= -1
    }
    if (DiamondY <= 0 + 50 || DiamondY >= 300) {
        directionY *= -1
    }
    if (DiamondX <= 0 - 25 || DiamondX >= height - 75) {
        countdown -= 1
    }
    if (DiamondY <= 0 + 50 || DiamondY >= 300) {
        countdown -= 1
    }
    if (countdown <= -1) {
        countdown += 1
    }
    if (countdown <= 0) {
        directionX *= 0
    }
    if (countdown <= 0) {
        directionY *= 0
    }
    text(countdown, DiamondX + 50, DiamondY - 25)

}
