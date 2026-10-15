'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');
console.log(showModal);

for (let currentItem = 0; currentItem < showModal.length; currentItem++) {
  showModal[currentItem].addEventListener('click', function () {
    console.log('Button clicked');
    // Passing in the name of the class we don't use the .
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

const close = function () {
  // When x is clicked close the modal
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log('Close modal');
};

// Now call the function along the event listener
closeModal.addEventListener('click', close);
overlay.addEventListener('click', close);
