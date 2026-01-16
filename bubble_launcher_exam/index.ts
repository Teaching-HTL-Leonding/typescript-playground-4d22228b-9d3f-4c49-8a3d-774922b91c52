let circleX : number[] = [];
let circleY : number[] = [];
let direction : number = [];




const SPEED: number = 2;
const RADI: number = 10;
const DIAM: number = RADI * 2;

function setup() {
    createCanvas(500, 300);
}

function draw() {
    background("white");

    fill('lightgray');
    stroke('darkgray');
    rect(0, 0, DIAM, height);


        
       
    
    pop()




    fill('yellow');
    stroke('gold');
    push()

    for(let i = 0; i < width; i ++){
        circle(circleX[i], circleY[i], DIAM);
          circleX[i] += SPEED * direction;
    

    pop()
    }
}
function mouseClicked() {

    circleX.push(mouseX)
    circleY.push(mouseY)



    
}

