const AVG_TEMP_LINZ: number[] = [
  -0.7, 0.5, 4.7, 9.9, 14.2, 17.9, 19.5, 19.3, 14.7, 10, 4.8, 0.6,
];

const AVG_TEMP_JOHANNESBURG: number[] = [
  20, 20, 18, 15, 12, 9, 9, 12, 16, 18, 18, 19,
];

function setup() {
  createCanvas(460, 300);
  background("white")

  drawTemperatures(AVG_TEMP_LINZ)
  drawAxes()
  drawYLabels()
  drawXLabels()
  

  // <<< Call the functions in the following order:
  // 1. Draw temperatures (gets AVG_TEMP_LINZ or AVG_TEMP_JOHANNESBURG as parameter)
  // 2. Draw axes
  // 3. Draw Y labels
  // 4. Draw X labels
}

function drawAxes() {

  strokeWeight(2)
  stroke("black")
  line(50, 50, 50, 250)
  line(45, 225, 410, 225)

}

function drawYLabels() {
  // <<< Add code to draw labels for the Y axis here
  strokeWeight(2)
  for(let i = 80; i < 411; i += 30){
    line(i, 220, i, 230)
}
}

function drawXLabels() {
  // <<< Add code to draw labels for the X axis here
    for(let i = 50; i < 275; i += 25){
    line(45, i, 55, i)
}
}

function drawTemperatures(temperatures: number[]) {
  // <<< Add code to draw the temperatures here
}