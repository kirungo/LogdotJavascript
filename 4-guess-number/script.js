'use strict';

// Select elements from the DOM
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const scoreTag = document.querySelector('.score');
const bodyTag = document.querySelector('body');
const highScoreTag = document.querySelector('.highscore');

// Create a random game number
let gameNumber = Math.trunc(Math.random() * 20) + 1;

// Set the value of the score
let score = 20;

// Set the value of the high score
let highScore = 0;

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
    bodyTag.style.backgroundColor = '#1f1e1e';

    // When player wins
  } else if (guess === gameNumber) {
    message.textContent = '🎉 Correct Number!';
    
    // When manipulating a style we always need to put it as a string
    bodyTag.style.backgroundColor = '#60b347';
    number.style.width = '15rem';
    number.textContent = gameNumber;

    // Update high score only if the current score is higher
    if (score > highScore) {
      highScore = score;
      highScoreTag.textContent = highScore;
    }
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
  bodyTag.style.backgroundColor = '#222';
  number.style.width = '15rem';
  scoreTag.textContent = score;
});
