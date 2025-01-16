'use strict';

// DOM Elements
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let scoreTrack = 20;
const highScoreLabel = document.querySelector('.label-highscore');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const againButton = document.querySelector('.btn.again');
const checkButton = document.querySelector('.btn.check');
const body = document.querySelector(' body');

score.textContent = scoreTrack;
// Events handling
checkButton.addEventListener('click', showGuessValue);
againButton.addEventListener('click', () => {
  location.reload();
});

function showGuessValue() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(scoreTrack);
  if (!guess) {
    message.textContent = '🚫Invalid number!';
  } else if (guess == secretNumber) {
    message.textContent = '✅Correct Number ';
    body.style.backgroundColor = '#60b347';
    highScore = guess >= highScore ? guess : highScore;
    scoreTrack++;
    number.number.textContent = '?';
    number.textContent = `${secretNumber}`;
    highScoreLabel.textContent = `🥇 Highscore: ${highScore}`;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  } else if (guess > secretNumber) {
    scoreTrack--;
    message.textContent = '☝️Too high';
    score.textContent = scoreTrack;
  } else {
    scoreTrack--;
    message.textContent = '👇too low';
    score.textContent = scoreTrack;
  }

  if (scoreTrack <= 0) {
    message.textContent = 'Game Over!';
    checkButton.disabled = true;
    scoreTrack = 20;
  }

  if (scoreTrack > 20) {
    scoreTrack = 20;
  }
}
