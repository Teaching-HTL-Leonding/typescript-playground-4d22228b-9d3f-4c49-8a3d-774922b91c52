function setup() {
    const SIZE = 400; // Canvas size (square)
    const GRID = 25; // Grid line distance

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(0.25);
    stroke("lightgray");

    // Draw vertical lines
    let i = GRID;
    while (i < SIZE) {
        line(i, 0, i, SIZE);
        i += GRID;
    }

    // Draw horizontal lines
    i = GRID;
    while (i < SIZE) {
        line(0, i, SIZE, i);
        i += GRID;
    }

    strokeWeight(2);
    for (let i = GRID; i < SIZE; i += GRID) {
        stroke("yellow");
        line(GRID, i, GRID * i / GRID, i);
    }

    for (let i = GRID; i < SIZE; i += GRID) {
        stroke("red");
        line(i, i, SIZE - GRID, i)
    }



    // <<< Write your code here
}
