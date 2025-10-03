// It must be possible to scale the entire field by changing the value of the constant SCALE.
// E.g. a SCALE value of 2 will create a small image, while a SCALE value of 10 will create a large image.
const SCALE = 5;

// Margin around the field (i.e. distance from edge to the field)
const MARGIN = 4;
const SOCCERFIELDWIDTH = 70
const SOCCERFIELDLENGTH = 100

function setup() {

    // We must calculate the size of the canvas using the constants.
    // Note that we assume that the soccer field has a width of 100m
    // and a height of 70m.
    createCanvas((SOCCERFIELDLENGTH + MARGIN * 2) * SCALE, (SOCCERFIELDWIDTH + MARGIN * 2) * SCALE);
    background("green");

    strokeWeight(0.5);
    stroke("white");
    noFill();
    angleMode(DEGREES);

    push();

    // Note that we scale everything by the constant SCALE. We use the size values
    // in meters as if they were pixels, and then scale them up by the SCALE factor.
    // Experiment with different SCALE values to see how it works.
    scale(SCALE);

    // translate moves the origin of the coordinate system. 0/0 will not be
    // in the top-left corner, but MARGIN pixels to the right/down.
    // Experiment with different MARGIN values to see how it works.
    translate(MARGIN, MARGIN);

    // TODO: Draw the soccer field as close as possible to a real soccer field.
    // <<< ADD YOUR CODE HERE 

    const MIDDLELINE = SOCCERFIELDWIDTH / 2
    
    rect(0, 0, SOCCERFIELDLENGTH, SOCCERFIELDWIDTH)
    const STRAFRAUM = 5.5 * 2 + 7.32 + 22

    const LENGHTGOALAREA = 5.5 * 2 + 7.32
    const WIDTHGOAL = 5.5
    rect(0, MIDDLELINE-LENGHTGOALAREA/2, WIDTHGOAL, LENGHTGOALAREA)
    rect(-2, 31.5, 2, 7.32 )
    rect(100, MIDDLELINE-LENGHTGOALAREA/2, -WIDTHGOAL, LENGHTGOALAREA)
    rect(102, 31.5, -2, 7.32 )
    line(50, 0, 50, 70)
    circle(50, 35, 18.3)
    circle( 50, 35, 0.7)
    rect(0, MIDDLELINE-11-LENGHTGOALAREA/2, 16.5, STRAFRAUM)
    rect(100, MIDDLELINE-11-LENGHTGOALAREA/2, -16.5, STRAFRAUM )
    arc(14.5, 35, 10, 15, -70, 70)
    arc(85.5, 35.5, 10, 15, 110, -110)
    circle(11, 35, 0.5)
    circle(89, 35, 0.5)
    arc(0, 0, 3, 3, 0, 90)
    arc(0, 70, 3, 3, -90, 0)
    arc(100, 70, 3, 3, -180, -90)
    arc(100, 0, 3, 3, 90, -180)
}
