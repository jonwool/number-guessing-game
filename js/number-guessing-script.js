
// 1. assign a random number to the variables
let randomNumber = Math.floor(Math.random() * 100) + 1;

//const variables you don't want to change, .variables inserts values into p in html
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

//store references to input and submit buttons
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

//keeps track of guesses, starting with 1 and references the reset button
let guessCount = 1;
let resetButton;

function checkGuess() {
  alert('I am a placeholder');
}
