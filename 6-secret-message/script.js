'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelector('.show-modal');
const closeModal = document.querySelector('.close-modal');

// Show the modal and overlay when the Show Modal button is clicked
showModal.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

// Reusable function to hide the modal and overlay
const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Close the modal when the X button or overlay is clicked
closeModal.addEventListener('click', close);
overlay.addEventListener('click', close);

// Close the modal when Escape is pressed, but only if it is visible
document.addEventListener('keydown', function (keyTouched) {
  if (keyTouched.key === 'Escape' && !modal.classList.contains('hidden')) {
    close();
  }
});
