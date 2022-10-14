const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const heart = [
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
];

const frank = [
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 1, 2, 1, 2, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 2, 3, 3, 3, 3, 3, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 2, 2, 0, 2, 2, 0, 0]
];
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawGrid(canvasWidth, canvasHeight);

    // wrap this line in a while loop
    // what changes?
    // * which row prints?
    // * the y increases by the pixel size
    let i = 0;
    let x = 150;
    let y = 150;
    let pixel = 25;
    let grid = frank;
    while (i < grid.length) {
        drawRow(grid[i], x, y, pixel);
        ++i
        y += pixel;
    }

function drawPixelArt(grid, topX, topY, pixel) {
    let i = 0;
    while (i < grid.length) {
        drawRow(grid[i], x, y, pixel);
        ++i
        y += pixel;
}
}

drawPixelArt(heart, 350, 135, 5)
drawPixelArt(frank, 700, 100, 10)

    i = 0;
    y = 350;
    while (i < heart.length) {
        drawRow(heart[i], 450, y, 15);
        ++i
        y+= 15;
    }
    // while (i < frank.length) {
    //     drawRow(frank[0], 150, 150, 25);
    // }

    // first 6 rows of frank
    drawRow(frank[0], 150, 150, 25);
    drawRow(frank[1], 150, 175, 25);
    drawRow(frank[2], 150, 200, 25);
    drawRow(frank[3], 150, 225, 25);
    drawRow(frank[4], 150, 250, 25);
    drawRow(frank[5], 150, 275, 25);

    // first 6 rows of the heart
    drawRow(heart[0], 450, 350, 15);
    drawRow(heart[1], 450, 365, 15);
    drawRow(heart[2], 450, 380, 15);
    drawRow(heart[3], 450, 395, 15);
    drawRow(heart[4], 450, 410, 15);
    drawRow(heart[5], 450, 425, 15);

}

function drawRow (row, topX, topY, pixelWidth) {

    for (let i = 0; i < row.length; i++) {
        // colornum gives us the color of the pixel we're about to draw
        let colorNum = row[i]; // 0, 1, 2, 3
        if (colorNum === 0) {
            noFill();
        } else if (colorNum === 1) {
            fill('pink');
        } else if (colorNum === 2) {
            fill('black');
        } else {
            fill('white');
        }
        square(topX, topY, pixelWidth)
        topX += pixelWidth;
    }
}
