function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    // drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    // drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    // drawCreature(454, 423, 141, '#aebb83', '#227876');
    // drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    // drawCreature(117, 314, 91, '#648d8e', '#afc272');
    
    drawCreature(500, 500, 200,'pink', '#87CEEB');
    drawCreature(300, 100, 150, '#F88379', 'lightgreen');
    drawCreature(500, 300, 100, 'seagreen', 'lightblue');
    drawCreature(100, 100, 70, 'pink', '#D8BFD8');
    drawCreature(100, 300, 180, 'red', 'darkorange');
    drawGrid(canvasWidth, canvasHeight);

}

// define your drawCreature function here:


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
