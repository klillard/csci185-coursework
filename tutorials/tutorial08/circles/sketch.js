function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    let counter = 0;
    while (counter < 10) {
        // odd or even
        if (counter % 2 == 0) {
            fill('hotpink');
        }
        else if  (counter % 3 == 0) {
            fill('teal')
        }
        else {
            fill('white')
        }
        circle(canvasWidth/2, 0 + counter * 20, counter * 20);
        counter += 1
       }

    drawGrid(canvasWidth, canvasHeight);
}
