const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawCreature(425, 225, 200, 'red', 'pink');

    drawGrid(canvasWidth, canvasHeight);
}

// replace this function with YOUR creature!
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
