// Layout constants
const GROUPS_PER_ROW = 10;
const ROWS = 10;
const MARKS_PER_GROUP = 5;
const TOTAL = ROWS * GROUPS_PER_ROW * MARKS_PER_GROUP; // 500

const GROUP_W = 42;   // width of one tally group
const GROUP_H = 36;   // height of the vertical strokes
const COL_GAP = 10;   // gap between groups
const ROW_GAP = 16;   // gap between rows
const MARGIN = 16;
const TITLE_HEIGHT = 30;

const CELL_W = GROUP_W + COL_GAP;
const CELL_H = GROUP_H + ROW_GAP;

// Colors
const COLOR_FILLED = "steelblue";

// The random number to visualize (0–500)
let randomNumber: number;

function drawCircle(color: boolean): void {
    push();
    strokeWeight(2);
    fill(color ? "blue" : "white")
    line(0, 0, 0, GROUP_H)
    line(10, 0, 10, GROUP_H)
    line(20, 0, 20, GROUP_H)
    line(30, 0, 30, GROUP_H)
    line(0, 26, 35, 8)
    pop();
}

function isColored(row: number, groups: number, n: number): boolean {
    return row * ROWS + groups < n;
}

function setup(): void {
    const canvasW = GROUPS_PER_ROW * CELL_W + 2 * MARGIN;
    const canvasH = ROWS * CELL_H + TITLE_HEIGHT + MARGIN;
    createCanvas(canvasW, canvasH);

    randomNumber = Math.floor(Math.random() * (501));


    noStroke();
    fill("black");
    textSize(14);
    textAlign(CENTER);
    text(`Random number: ${randomNumber} / 500`, width / 2, TITLE_HEIGHT);


    background("white");
        translate(MARGIN, TITLE_HEIGHT + TITLE_HEIGHT)
        for (let row = 0; row < ROWS; row++) {
        push();
        for (let groups = 0; groups < GROUPS_PER_ROW; groups++) {
            drawCircle(isColored(row, groups, randomNumber));
            translate(CELL_W, 0);
        }
        pop();
        translate(0, CELL_H);
}
}