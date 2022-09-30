function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:

    drawCircle(100, 100, 100, 'pink');

    drawCircle(200, 100, 50, 'skyblue');

    drawCircle(300, 100, 100, 'pink');

    drawCircle(400, 100, 50, 'skyblue');

    // Exercise 2: 
    drawOval(100, 200, 100, 62.5, 'teal');
    drawOval(200, 200, 62.5, 100, 'pink');
    drawOval(300, 200, 100, 62.5, 'teal');
    drawOval(400, 200, 62.5, 100, 'pink');


    // Exercise 3:

    drawBullseye(100, 300, 100, 'pink', 'lightgreen');

    drawBullseye(200, 300, 50, 'blue', 'cyan');

    drawBullseye(300, 300, 100, 'pink', 'lightgreen');

    drawBullseye(400, 300, 50, 'blue', 'cyan');

    // Exercise 4:
    drawFace(100, 400, 50);

    drawFace(200, 400, 100);

    drawFace(300, 400, 50);

    drawFace(400, 400, 100);


    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor

// drawCircle(300, 300, 50, 'yellow');
function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY, fillColor);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size, color1, color2) {
    fill(color1);
    circle(centerX, centerY, size);
    fill(color2);
    circle(centerX, centerY, size * .75); //convert to an expression
    fill(color1);
    circle(centerX, centerY, size * .5); //convert to an expression
    fill(color2);
    circle(centerX, centerY, size * .25); //convert to an expression

}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size) {
    fill('white');
    circle(centerX, centerY, size);
    fill('black');
    circle(92, 392, 8);
    circle(108, 392, 8);

    circle(184, 382, 16);
    circle(216, 382, 16);

    circle(292, 392, 8);
    circle(308, 392, 8);

    circle(384, 382, 16);
    circle(416, 382, 16);
}
