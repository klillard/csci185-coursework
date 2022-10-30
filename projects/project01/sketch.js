const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
let stars = [];
let bubbles = [];

const balls = [
    { x: 500, y: 250, d: 50, speed: 4 },
    { x: 200, y: 200, d: 20, speed: 2 },
]

const balls2 = [
    { x: 600, y: 400, d: 50, speed: 2},
    { x: 30, y: 20, d: 20, speed: 1},
]

const balls3 = [
    { x: 300, y: 500, d: 50, speed: 2},
    { x: 500, y: 600, d: 20, speed: 1},
]

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    

}

let counter = 0
let x = 750
let y = 550

function draw() {
    clear();

    // main creature
    drawCreature(x, y, 150,'pink', '#87CEEB');

    // planets
    drawLandscapeObject(100, 100, 110, 'purple', 'yellow')
    drawLandscapeObject(400, 250, 130, 'teal', 'green')
    drawLandscapeObject(950, 100, 140, "orange", 'pink')
    drawLandscapeObject(1100, 400, 100, 'pink', 'cyan')
    drawLandscapeObject(1290, 100, 123, 'lime', 'magenta')

    // circle planets
    drawLandscapeObject2(100, 600, 50, 'yellow')
    drawLandscapeObject2(600, 100, 40, 'red')

    // evil creatures
    drawCreature2(100, 300, 60, 'blue', 'white')
    drawCreature2(1290, 500, 100, 'red', 'black')
    drawCreature2(1170, 100, 40, 'orange', 'green')

    // stars
    strokeWeight(1);
    noFill();
    circle(300, 300, 1);
    circle(100, 100, 1);
    circle(230, 100, 1.5);

    if (counter % 70 == 0) {
        buildStarArray()
    }
    drawStars();
    counter++

    for (const bubble of bubbles) {
        circle(bubble.x, bubble.y, bubble.d);
        bubble.y -= bubble.speed;
        strokeWeight(5)
        stroke('lime')
    }


    rect(balls[1].x, balls[1].y, balls[1].d);
    balls[1].y += 5 * Math.cos(counter / 30);
    balls[1].x += 10;

    if (balls[1].x > canvasWidth + 100) {
        balls[1].x = -100;
    }

    rect(balls2[1].x, balls2[1].y, balls[1].d);
    balls2[1].y += 5 * Math.cos(counter / 30);


    balls2[1].x += 10;

    if (balls2[1].x > canvasWidth + 100) {
        balls2[1].x = -100
    }

        
    rect(balls3[1].x, balls3[1].y, balls3[1].d);
    balls3[1].y += 5 * Math.cos(counter / 30);


    balls3[1].x += 10;

    if (balls3[1].x > canvasWidth + 100) {
        balls3[1].x = -100
    }
    
    //movable planet

    fill(data.color);
    circle(data.x, data.y, data.d);
}

// movable planet



const data = {
    x: 400,
    y: 400,
    d: 100,
    color: 'lime'
}

function mouseDragged() {
    let d = dist(data.x, data.y, mouseX, mouseY);
    if (d < data.d/2 || data.color == 'yellow') {
        data.color = 'yellow';
        data.x = mouseX;
        data.y = mouseY;
    } 
}

function mouseReleased() {
    data.color = 'lime';
}



// drawCreature function


function drawCreature(centerX, centerY, size, primaryColor, secondaryColor) {
    let sf = size / 5;
    fill(primaryColor);
    stroke('black')
    // circle(centerX, centerY, size, primaryColor, secondaryColor);
    strokeWeight(4);
    //face
    circle(centerX, centerY, size);
    fill('white')
    stroke('black')
    
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


// evil creatures


function drawCreature2(centerX, centerY, size, primaryColor, secondaryColor) {
    let sf = size / 5;
    fill(primaryColor);
    stroke('red')
    // circle(centerX, centerY, size, primaryColor, secondaryColor);
    strokeWeight(4);
    //face
    circle(centerX, centerY, size);
    fill('black')
    stroke('white')
    
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
    stroke('red')
    point(centerX + sf, centerY - sf);

    fill(secondaryColor)
    strokeWeight(5);
    // mouth
    rect(centerX - sf / 6, centerY, sf);

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


// buildstar function


function buildStarArray() {
    let i = 0;
    stars = []
    while(i < 100) {
        const star = {
            x: randomIntFromInterval(canvasWidth, 0),
            y: randomIntFromInterval(0, canvasHeight),
            d: randomIntFromInterval(1, 2),
        }
        i++;
        // circle(star.x, star.y, star.d);
        stars.push(star)
        // noFill()
        // strokeWeight(1)
        // stroke('white');
        }
    
}
function drawStars() {
    let i = 0;
    while(i < 100) {
    let star = stars[i]
    i++;
    circle(star.x, star.y, star.d);
    noFill();
    strokeWeight(1)
    stroke('white');
    }
}

function randomIntFromInterval (min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// planets with disks


function drawLandscapeObject (centerX, centerY, size, primaryColor, secondaryColor) {
    let sf = size / 5;
    fill(primaryColor);
    stroke('black')
    // circle(centerX, centerY, size, primaryColor, secondaryColor);
    strokeWeight(4);
    //face
    circle(centerX - 2, centerY + 20, size);

    
    // disk
    fill(secondaryColor);

    ellipse(centerX - sf * .07, centerY + sf * 1, sf * 7.5, sf * 2);
}


// small circle planets


function drawLandscapeObject2(centerX, centerY, size, primaryColor) {
    let sf = size / 5;
    fill(primaryColor);
    stroke('black')
    circle(centerX, centerY, size);
}


// moving drawCreature and shooting bullets 


function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'ArrowUp') {
        console.log('up arrow!');
        y -= 2;
    } else if (ev.code == 'ArrowDown') {
        console.log('down arrow!');
        y += 2;
    } else if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        x -= 2;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        x += 2;
    } else if (ev.code == 'Space') {
        shoot();
    }
}


// shooting bullets


function shoot() {
    // 1. When you drag your mouse, create a bubble 
    //    object and add it to the "bubbles" list.
    const bubble = {
        x: x,
        y: y - 25,
        d: 8,
        speed: 10
    }
    bubbles.push(bubble)
}

document.addEventListener('keydown', moveController);