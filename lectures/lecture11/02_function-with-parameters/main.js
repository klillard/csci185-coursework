// make a function:

const makeRed = () => {
    document.querySelector('body').style.backgroundColor = "red"
}

const makeBlue = () => {
    document.querySelector('body').style.backgroundColor = "blue"
}

const makeGreen = () => {
    document.querySelector('body').style.backgroundColor = "green"
}



//generic version of the same thing
const setBackgroundColor = (bgColor) => {
    document.querySelector('body').style.backgroundColor = bgColor;
}