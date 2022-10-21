const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

let currentX = 500;
let currentY = 300;
let isFollowing = false;
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // message
    // fill('black');
    // textAlign(CENTER);
    // textSize(16);
    // text("Click or drag your mouse.", canvasWidth/2, canvasHeight/2);
    // noFill();
    drawCreature(currentX, currentY, 50);
}

function drawCreature(x, y, size, primaryColor='teal', secondaryColor='pink') {
    fill(primaryColor);
    stroke(secondaryColor);
    circle(x, y, size);
}


// function mouseClicked() {
//     circle(mouseX, mouseY, Math.random()* 50 + 50);
// }

// function mouseDragged() {
//     circle(mouseX, mouseY, Math.random()* 50 + 50);
// }

function mouseMoved() {
    // console.log(mouseX, mouseY);
    if (isFollowing == true) {
        clear();
        drawCreature(mouseX, mouseY, 150);
    }

}


function mouseClicked() {
    if (isFollowing == false) {
        isFollowing = true;
    } else {
        isFollowing = false;
    }

}