
// 1. assign a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

//const are variables you don't want to change
// 2. made to store references to the results paragraphs in the html with the same name in the id=""
// .querySelector references a CSS object
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

//store references to input and submit buttons
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

//keeps track of guesses, starting with 1 and references the reset button
let guessCount = 1;
let resetButton;

// puts text cursor into the <input> text field as soon as the page loads
// user can start typing their first guess without having to click the form field first
// .focus() is a method, function stored inside an object

guessField.focus();

/*
// this is an alert function, creates a pop-up
function checkGuess() {
  alert('I am a placeholder');
}
*/
// new checkGuess() function, check whether the guess is correct or not
function checkGuess() {

  // 1. declare var and sets to current value inside text field
  // runs value through Number() constructor to make sure the value is a number
  let userGuess = Number(guessField.value);

  // if is a conditional code block
  // 2. logic is self explanatory
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }

  // appends the userGuess value to the end of the guesses <p>, reference const guesses above
  guesses.textContent += userGuess + ' ';

  // 3. logic is self explanatory
  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    // clear the contents of the lowOrHi information box
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) { // 4. is this the last turn (would probably move this variable up to be a defined variable)
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!'; // 5. logic is self explanatory
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) { // 6. logic is self explanatory
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) { // 7. logic is self explanatory
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  //8. gets ready for the next guess to be submitted
  // add 1 to the guess count, ++ an incrementation operation — increment by 1
  guessCount++;
  // next two empty the value out of the form text field and focus it again
  guessField.value = '';
  guessField.focus();
}

//9. adding an add event listener to the guessSubmit button
  // checkGuess function above won't do anything unless it is called
  // want to call it when the "Submit Guess" button is clicked
  // event listeners are need to run the code when the button is checked
//method addEventListener has two arguments, type of event = 'click', code to run = checkGuess
guessSubmit.addEventListener('click', checkGuess);

//10. creating the setGameOver() function
function setGameOver() {
  // disable the form text input of buttom
  guessField.disabled = true;
  guessSubmit.disabled = true;

  //generate a new button
  resetButton = document.createElement('button');
  //set text label value to 'Start new game'
  resetButton.textContent = 'Start new game';
  //add to the bottom of the html
  document.body.appendChild(resetButton);
  //add an event listener to the new button, when clicked function resetGame() is run
  resetButton.addEventListener('click', resetGame);
}

//11. resetGame() function
function resetGame() {
  // puts guessCount back to 1
  guessCount = 1;

  // empties the text from the pop-up paragraphs that tells you previous guess value, whether it was wrong, and if the last guess was high or low
  // creates a list of all <p> inside <div class = "resultParas"> loops through each element removing the text
  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  // removes the reset button from the code
  resetButton.parentNode.removeChild(resetButton);

  // Enables the form elements,
  // Empties and focuses the text field, ready for a new guess to be entered.
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  // removes the background color from lastResult <p>
  lastResult.style.backgroundColor = 'white';

  //generate a new random number
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
