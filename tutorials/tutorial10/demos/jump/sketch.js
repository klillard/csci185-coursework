const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

let x = 100;
let y = 300;
let doJump = false;
let counter = 0;
let initialY = y;

const c1 = {
    x: 400,
    y: 300,
    width: 100,
    speed: 0.2,
    color: 'hotpink'
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawCreature(x, y, 100, 'pink', 'red');
    displayMessage();
}


function draw() {
    clear();
    
    if (doJump) {
        // animate for one Math.sin cycle, then 
        // turn doJump variable to false
        const jumpHeight = -15;
        const jumpSpeed = 5;
        y += jumpHeight * Math.sin(counter / jumpSpeed); 
        counter++;
        if (y > initialY) {
            doJump = false;
        }
    }

    // circle(x, y, 50);
    drawCreature(x, y, 100, 'pink', 'red');
    // other creature
    drawCreature(c1.x,c1.y, c1.width, 'purple', 'blue');
    // message:
    displayMessage();

}


function jump(ev) {
    console.log(ev.code);
    if (ev.code == 'Space') {
        doJump = true;
    }
    
    // message
   displayMessage();
}

function displayMessage() {
    fill('black');
     textAlign(CENTER);
     textSize(16);
     text("Press the spacebar to jump.", canvasWidth/2, canvasHeight/2);
}

// Add event listener on keydown
document.addEventListener('keydown', jump);

    let centerX = x;
    let centerY = y;

function drawCreature(centerX, centerY, size, primaryColor, secondaryColor) {
    let sf = size / 5;
    fill(primaryColor);
    // circle(centerX, centerY, size, primaryColor, secondaryColor);
    strokeWeight(4);
    //face
    circle(centerX, centerY, size);
    fill('white')
    
    //left eye
    circle(centerX - sf, centerY - sf, size / 6.5);
    fill('white');

    //right eye
    circle(centerX + sf, centerY - sf, size / 6.5);

    //left pupil
    strokeWeight(size / 13);
    point(centerX - sf, centerY - sf);

    //right pupil
    strokeWeight(size / 13);
    point(centerX + sf, centerY - sf);

    fill(secondaryColor)
    strokeWeight(5);
    // mouth
    rect(centerX - sf / 2, centerY, sf);

    // rect(centerX, centerY, size, primaryColor, secondaryColor);
    // left leg
    strokeWeight(4);
    rect(centerX - sf * 2, centerY + sf * 2, size / 4);
    // right leg
    rect(centerX + sf * 1, centerY + sf * 2, size / 4);

    // left arm
    fill(secondaryColor);
    strokeWeight(4);
    ellipse(centerX - sf * 3, centerY - sf * .05, sf * 2, sf * 1);

    // right arm
    ellipse(centerX + sf * 3, centerY + sf * .05, sf * 2, sf * 1);

    // left ear
    circle(centerX - sf , centerY - sf * 2.5, size / 4.5);

    //right ear
    circle(centerX + sf, centerY - sf * 2.5, size / 4.5);


}
