'use strict';

//document models
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonsOpenModal = document.querySelectorAll('.show-modal');

//functions
const openModal = () => {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

const closeModal = () => {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

// Attach event listeners
buttonsOpenModal.forEach((button) => {
  button.addEventListener('click', openModal);
});
overlay.addEventListener('click', closeModal);
buttonCloseModal.addEventListener('click', closeModal);

window.addEventListener('keydown', (x) => {
  if (x.key === 'Escape') closeModal();
});
