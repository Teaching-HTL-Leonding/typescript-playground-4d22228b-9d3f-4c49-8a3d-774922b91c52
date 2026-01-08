function setup() {

    createCanvas(500, 500)
    background("white")
    const centerY: number[] = [161, 180, 210, 250,]
    const centerX: number[] = [161, 180, 210, 250,]
    const Durchmesser: number[] = [20, 40, 60, 80, 100]

    console.log("vor push", Durchmesser)
    centerX.push(300)
    centerY.push(300)
    console.log("nach push", Durchmesser)

    centerX.splice(0, 3)
    centerY.splice(0, 3)
    Durchmesser.splice(0, 3)

    fill("red")
    noStroke()
    for (let i = 0; i < centerX.length; i++) {
        circle(centerX[i], centerY[i], Durchmesser[i])
    }


}

function draw() {
}
