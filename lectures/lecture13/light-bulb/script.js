const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";

const elem = document.querySelector("#my_image");

const turnOn = (ev) => {

    if (elem.src === imgOff) {
        // setting src to something new
        elem.src = imgOn;

    } else {
        elem.src = imgOff;
    }
};

// attach function to image's click event:
document.querySelector("#my_image").onclick = turnOn;



// Write a function that takes 2 arguments: name and timeOfDay in hours (military time). 
// Morning: 3-11
// Afternoon: 12-19, and 
// Night: 20-23, 0-2 
// When I invoke your function as follows, it should output the following to the command line:

// greet(‘Sarah’, 11);		// “Good morning, Sarah!”
// greet(‘Walter’, 1);		// “Good night, Walter!”
// greet(‘Taylor’, 17);		// “Good afternoon, Taylor!”

const greet = (name, timeOfDay) => {
    if (timeOfDay >= 12 && timeOfDay < 19) {
        console.log('Good Afternoon, ' + name + '!');
    } else if (timeOfDay >= 20 || )
    console.log('Hi, ' + name + '!');

}




