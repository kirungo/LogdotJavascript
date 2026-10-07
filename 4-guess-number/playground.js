'use strict';
// To see the content of .message class
console.log(document.querySelector('.message').textContent);

// Changing the content of .message class using JS
document.querySelector('.message').textContent = `🎉 Correct Number!`;

// Change the number
document.querySelector('.number').textContent = 13;

// Change the score
document.querySelector('.score').textContent = 0;

// Change the high-score
document.querySelector('.highscore').textContent = 20;

// For input fields we use value
document.querySelector('.guess').value = 23;
