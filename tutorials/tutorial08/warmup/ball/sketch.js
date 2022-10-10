const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

let x = 200;
let speed = 8;

function draw() {
    frameRate(1);
    clear();

    // when the ball hits the right wall,
    // make it bounce
    if (x >= 500 - width/2) {
        speed = speed - 5;
        width = width + 2;
    }

    // when the ball hits the left wall,
    // make it bounce

    else if (x <= 150 + width/2) {
        speed = -1 * speed;
        width = width + 2;
    }
    console.log(speed);

    // draw walls:
    fill('red');
    rect(100, 0, 50, canvasHeight);
    rect(500, 0, 50, canvasHeight);

    // draw circle:
    fill('black');
    circle(x, canvasHeight/2, width);
    x += speed;
    console.log("x position is:", x);
    // console.log ("X position is", x);

    drawGrid(canvasWidth, canvasHeight);
}