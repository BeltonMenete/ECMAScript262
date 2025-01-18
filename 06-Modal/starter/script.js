'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonsOpenModal = document.querySelectorAll('.show-modal');

function openModal() {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
}

function closeModal() {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
}

// Attach event listeners
buttonsOpenModal.forEach((button) => {
  button.addEventListener('click', openModal);
});
overlay.addEventListener('click', closeModal);
buttonCloseModal.addEventListener('click', closeModal);
