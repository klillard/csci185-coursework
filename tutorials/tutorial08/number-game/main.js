// code that picks a random number between 1 and 100:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;

// make a counter:
let counter = 0


function check() {

    // tally up their guesses

    // counter += 1;
    // counter = counter + 1;
    counter++;
    // your code here.
    // step 1: get what the user typed into the input and store it in a variable

let userGuess = document.querySelector('#guess').value;
console.log(userGuess);




    // step 2: convert the value stored in the variable to a number.
    userGuess = Number(userGuess);





    // step 3: let's check if the user guessed right
    if (userGuess === secret) {
        console.log('You win! :)');
        document.querySelector('#message').innerHTML = 'You win!'
        document.querySelector('#celebrate').className = '';
    } else if (userGuess < secret) {
        console.log('Too low!');
    } else if (userGuess > secret) {
        console.log('Too high!');
    }

document.querySelector('#num-guesses').innerHTML = 'you have guessed ' + counter + ' times.';


    //         guess === secret: you win!
    //         guess < secret: too low!
    //         guess > secret: too high!
    console.log("your code here!");
}