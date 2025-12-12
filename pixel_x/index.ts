function setup() {
    const SIZE = 425; // Canvas size
    const GRID = 25;  // Size of the squares

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    for (let i = GRID; i < SIZE - GRID; i += GRID) {
        fill("yellow")
        rect(i, i, GRID, GRID)
    }

    for (let i = GRID; i < SIZE - GRID; i += GRID) {
        fill("green")
        rect(i, SIZE - i - GRID, GRID, GRID)
    }
}
