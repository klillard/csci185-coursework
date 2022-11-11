const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:
drawElmo(100, 100, 150, '#0bc9cd', true);   // nose drawn
drawElmo(300, 200, 75, '#0bc9cd', false);   // no nose drawn
drawElmo(100, 325, 100, '#8093f1', false);  // no nose drawn
drawElmo(250, 375, 125, '#7fb285', true);   // nose drawn
drawElmo(550, 200, 250, '#102e4a', true);   // nose drawn



    drawGrid(canvasWidth, canvasHeight);
}


// function definition goes here:

function drawElmo(x, y, size, color, hasNose) {
    sf = size / 5

    fill(color)
    // face circle
    circle(x, y, size)


    // eyes
    fill('white')
    circle(x + sf - 5, y - sf, size / 3.5);
    circle(x + 5 - sf, y - sf, size / 3.5);
    
    // pupils

     //right pupil
     strokeWeight(size / 8);
     point(x + sf - 7, y - sf);

     //right pupil
     strokeWeight(size / 8);
     point(x - sf + 7, y - sf);

    // nose

    strokeWeight(1)

let counter = 0
    counter++;
    if (hasNose == true) {
        fill('#db5461');
        strokeWeight(1)
        ellipse(x + sf * 0.01, y + sf / 4, size / 4, size / 3)
    }

}