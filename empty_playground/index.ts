function setup() {

    createCanvas(500, 500)
    background("red")

    for (let i = 1; i < 10; i += 2) {
        fill("black")
        rect(50 * i, 50, 40, 40)
    }

    let j = 1

    while(j < 10){
        fill("black")
        rect(50 * j, 200, 40, 40)
        j += 2
    }
}


