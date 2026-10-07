'use strict';

// Select elements from the DOM
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

// Create a random game number
const gameNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = gameNumber;

/**
 * addEventListener(
 * WHAT should I watch for?,
 * WHAT should I do when it happens?
) */

checkButton.addEventListener('click', function () {
  // Get the number entered by the user
  const guess = Number(guessInput.value);

  if (!guess) {
    message.textContent = `🔞 No Number given!`;
  } else if (guess === gameNumber) {
    message.textContent = `🎉 Correct Number!`;
    number.textContent = gameNumber;
  } else if (guess > gameNumber) {
    guessInput.value = '';
    message.textContent = `📈 Too High!`;
  } else if (guess < gameNumber) {
    guessInput.value = '';
    message.textContent = `📉 Too Low!`;
  }
});

// Watch the Again button and restart the game!
againButton.addEventListener('click', function () {
  message.textContent = `Start guessting...`;
  number.textContent = `?`;
  guessInput.value = '';
  gameNumber = Math.trunc(Math.random() * 20) + 1;
});
