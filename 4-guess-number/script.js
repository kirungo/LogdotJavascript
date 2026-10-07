'use strict';

/**
 * addEventListener(
 * WHAT should I watch for?, 
 * WHAT should I do when it happens?
) */

// Create a random number
let gameNumber = Math.floor(Math.random() * 20) + 1;
console.log(gameNumber);

document.querySelector('.check').addEventListener('click', function () {
  // find the input and show it to me in the console
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = `🔞 No Number given!`;
  } else if (guess === gameNumber) {
    document.querySelector('.message').textContent = `🎉 Correct Number!`;
    document.querySelector('.number').textContent = gameNumber;
  } else {
    // For input fields we use value
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = `❌ Try again!`;
  }
});

/**
 *  What i want
 *      Let the system generate a random number between 0.1 to 0.9 and let it be multiplied by 10 and stored as the sytem generated number.
 * let the user guess the number, if it matches let the system say correct umber and show the system number if its wrong let the system not show the correct number but tell the user to try again
 */
