const WIDTH = 500;
const HEIGHT = 300;
const MARGIN = 50;

const wordToGuess = "apple";

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background("black");
  textAlign(CENTER, CENTER);
  colorMode(HSB);
  angleMode(DEGREES);


  for (let i = 0; i < wordToGuess.length; i++) {
    const LetterX = random(50, 400)
    const LetterY = random(50, 230)
    const LetterSize = random(20, 60)
    const Color = random(0, 360)
    const Letterrotate = random(180, -90)

    push()
    translate(LetterX, LetterY)
    rotate(Letterrotate)
    textAlign(CENTER, CENTER);
    fill(Color, 100, 100)
    textSize(LetterSize);
    text(wordToGuess[i], 0, 0);
    pop()
  }

}

function guess(textInput: string) {
  fill("white");

  if (textInput === wordToGuess) {
    background("green");
    textSize(75);
    text("Correct!", WIDTH / 2, HEIGHT / 2);
  } else {
    background("red");
    textSize(50);
    text(`Wrong!\nIt was "${wordToGuess}"`, WIDTH / 2, HEIGHT / 2);
  }
}
