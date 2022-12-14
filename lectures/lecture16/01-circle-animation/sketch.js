

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// initialize variables outside of the function:
const ball = {
    x: 0,
    y: 0,
    d: 50,
    speedX: 3,
    speedY: 2
}


const circleData = [
    {x: 500, y: 50, d: 100, speedX: 3, speedY: 3, color: 'pink'},
    {x: 300, y: 150, d: 50, speedX: 2, speedY: 0, color: 'skyblue'},
    {x: 400, y: 400, d: 25, speedX: 0, speedY: 1, color: 'sagegreen'},
    {x: 40, y: 520, d: 80, speedX: 2, speedY: 0, color: 'lavender'},
    {x: 140, y: 120, d: 150, speedX: 0, speedY: -0.5, color: 'salmon'},
    {x: 350, y: 350, d: 70, speedX: 1, speedY: 1, color: 'red'},
];

function draw() {
    clear();
    // let i = 0;
    // while (i < circleData.length) {
    for (let i = 0; i <circleData.length; i++) {
    const ball = circleData[i];
    fill(ball.color);
        circle(ball.x, ball.y, ball.d)
        ball.x += ball.speedX;
        ball.y += ball.speedY;
        i++;
    }
    circle(ball.x, ball.y, ball.d)
    ball.x += ball.speedX
    ball.y += ball.speedY
    drawGrid(canvasWidth, canvasHeight);
}
