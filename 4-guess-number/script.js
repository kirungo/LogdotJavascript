'use strict';

// Select elements from the DOM
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const scoreTag = document.querySelector('.score');

// Create a random game number
let gameNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = gameNumber;

// Set the value of the score
let score = 20;

/**
 * addEventListener(
 * WHAT should I watch for?,
 * WHAT should I do when it happens?
 */
checkButton.addEventListener('click', function () {
  // Get the number entered by the user
  const guess = Number(guessInput.value);

  // When there is no input
  if (!guess) {
    message.textContent = '🔞 No Number given!';

    // When player wins
  } else if (guess === gameNumber) {
    message.textContent = '🎉 Correct Number!';
    number.textContent = gameNumber;
  } else if (score > 1) {
    score = score - 1;
    scoreTag.textContent = score;
    guessInput.value = '';

    if (guess > gameNumber) {
      // When guess is too high
      message.textContent = '📈 Too High!';
    } else {
      // When guess is too low
      message.textContent = '📉 Too Low!';
    }
  } else {
    score = 0;
    message.textContent = '☄️ You lost the game!';
    scoreTag.textContent = score;
  }
});

// Watch the Again button and restart the game!
againButton.addEventListener('click', function () {
  score = 20;
  gameNumber = Math.trunc(Math.random() * 20) + 1;

  message.textContent = 'Start guessing...';
  number.textContent = '?';
  guessInput.value = '';
  scoreTag.textContent = score;
});
