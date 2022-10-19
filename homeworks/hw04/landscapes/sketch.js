const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
    
    // picks a random number between 0 and 100:
    let rando = Math.random() * 100;
    console.log(rando);
    
    // picks a random number between 10 and 500:
    rando = Math.random() * 490 + 10;
    console.log(rando);
    
    // draws 4 stars: 
    strokeWeight(0);
    noFill();
    circle(50, 80, 2.5);
    circle(50, 400, 1.5);
    circle(600, 287, 3);
    circle(400, 143, 1.5);
}

// Katelyn's Function:
function drawBubbles() {
let i = 0;
while (i < 100) {
    const bubble = {
        x: Math.random() * canvasWidth
        // y: Math.random() * canvasHeight
        // d = Math.random() * 50
}
        circle(bubble.x, y, d);
        noFill()
        strokeWeight (1);
        stroke('white');
        i++;
}
}
// function drawBubbles() {
//     let i = 0;
//     // strokeWeight (1);
//     // stroke('white');
//         while i <= 0 {
//             const x = Math.random() * canvasWidth
//             const y = Math.random() * canvasHeight
//             width = Math.random() * 40
//         }
//         circle(x, y, width);
//         strokeWeight (1);
//         stroke('white');
//         i++;
// }    

// function drawStars() {
//     strokeWeight(0);
//     fill('white');
//     for (let i = 0; i < 1000; i++) {
//         const x = Math.random() * canvasWidth;
//         const y = Math.random() * canvasHeight;
//         const width = Math.random() * 2 + 0.5;
//         circle(x, y, width);
//     }
// }


// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    let i = 0
    while(i < 100) {
    const ball = {
        x: randomIntFromInterval(canvasWidth, 0),
        y: randomIntFromInterval(0, canvasHeight),
        d: randomIntFromInterval(20, 50),
        speedX: 3,
        speedY: 2
    }
    i++;
    circle(ball.x, ball.y, ball.d);
    noFill()
    strokeWeight(1)
    stroke('white');
    }
}

function randomIntFromInterval (min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// function drawBubbles() {
//     strokeWeight(1);
//     stroke('white');
//     noFill();
//     for (let i = 0; i < 500; i++) {
//         const x = Math.random() * canvasWidth;
//         const y = Math.random() * canvasHeight;
//         const width = Math.random() * 40 + 5;
//         circle(x, y, width);
//     }
// }