function setup() {
    const SIZE = 400;  // Size of canvas
    const STRIPE_THICKNESS = 50; // Thickness of the stripes

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    let i = STRIPE_THICKNESS

    for (let i = STRIPE_THICKNESS; i < SIZE; i += 100) {
        fill("green")
        rect(0, 0 + i - 50, SIZE, STRIPE_THICKNESS)


        fill("yellow")
        rect(0, 0 + i, SIZE, STRIPE_THICKNESS)
    }
}
