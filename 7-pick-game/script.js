'use strict';

// Player 0 - Identifiers
let player0 = document.querySelector('.player-0');
let player0Score = document.querySelector('#score-0');
let player0CurrentScore = document.querySelector('#current-0');

// Player 1 - Identifiers
let player1 = document.querySelector('.player-1');
let player1Score = document.querySelector('#score-1');
let player1CurrentScore = document.querySelector('#current-1');

// Current player identifier
let activePlayer = document.querySelector('.player-active');

// Dice Game Identifiers
const dice = document.querySelectorAll('.btn');
const newGameButton = document.querySelector('.btn-new');
const rollDiceButton = document.querySelector('.btn-roll');
const holdDiceButton = document.querySelector('.btn-hold');

// Dice Image
const diceImage = document.querySelector('.dice');

// Game Winner
let gamePlaying = true;

rollDiceButton.addEventListener('click', function () {
  const randomDice = Math.trunc(Math.random() * 6) + 1;

  // Update the dice image
  diceImage.src = `dice-${randomDice}.png`;

  if (activePlayer === player0 && randomDice === 1) {
    // set player 0 current score to 0
    player0CurrentScore.textContent = 0;

    // remove the active player class from player 0
    player0.classList.remove('player-active');

    // add the active player class to player1
    player1.classList.add('player-active');

    // switch the active player
    activePlayer = player1;
  } else if (activePlayer === player0 && randomDice !== 1) {
    // update the current score to the random dice number
    player0CurrentScore.textContent =
      Number(player0CurrentScore.textContent) + randomDice;
  } else if (activePlayer === player1 && randomDice === 1) {
    // Now deal with player1
    player1CurrentScore.textContent = 0;

    // remove the active player class from player 0
    player1.classList.remove('player-active');

    // add the active player class to player1
    player0.classList.add('player-active');

    // switch the active player
    activePlayer = player0;
  } else {
    // update the current score of player1
    player1CurrentScore.textContent =
      Number(player1CurrentScore.textContent) + randomDice;
  }
});

// Add your current score to your total score. Your current score resets to zero, and the other player takes their turn.
holdDiceButton.addEventListener('click', function () {
  if (!gamePlaying) return;

  if (activePlayer === player0) {
    // Add current score to total score
    player0Score.textContent =
      Number(player0Score.textContent) +
      Number(player0CurrentScore.textContent);

    // Check if player 0 has won
    if (Number(player0Score.textContent) >= 100) {
      player0.classList.add('player-winner');
      player0CurrentScore.textContent = 'Winner!';
      gamePlaying = false;
      return;
    }

    // Reset player 0 current score
    player0CurrentScore.textContent = 0;

    // Switch to player 1
    player0.classList.remove('player-active');
    player1.classList.add('player-active');
    activePlayer = player1;
  } else if (activePlayer === player1) {
    // Add current score to total score
    player1Score.textContent =
      Number(player1Score.textContent) +
      Number(player1CurrentScore.textContent);

    // Check if player 1 has won
    if (Number(player1Score.textContent) >= 100) {
      player1.classList.add('player-winner');
      player1CurrentScore.textContent = 'Winner!';
      gamePlaying = false;
      return;
    }

    // Reset player 1 current score
    player1CurrentScore.textContent = 0;

    // Switch to player 0
    player1.classList.remove('player-active');
    player0.classList.add('player-active');
    activePlayer = player0;
  }
});

// Restart Game
newGameButton.addEventListener('click', function () {
  // Reset total scores
  player0Score.textContent = 0;
  player1Score.textContent = 0;

  // Reset current scores
  player0CurrentScore.textContent = 0;
  player1CurrentScore.textContent = 0;

  // Reset active player
  player1.classList.remove('player-active');
  player0.classList.add('player-active');
  activePlayer = player0;

  // Remove winner styling
  player0.classList.remove('player-winner');
  player1.classList.remove('player-winner');

  // Allow the game to be played again
  gamePlaying = true;

  // Reset dice image
  diceImage.src = 'dice-5.png';
});
