'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20
let highscore = 0
const displayMessage = function (message){
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    // when there is no input
    if (!guess) {
        displayMessage('No number!');
    }
    // when the player wins
    else if(guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('Correct number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'; 
        if (score > highscore) {highscore = score};
        document.querySelector('.highscore').textContent = highscore
    } 
    // when the guess is wrong
    else if (score > 1) {
      if(guess !== secretNumber) {
        displayMessage(guess > secretNumber ? 'Too high! You lost 1 point' : 'Too low! You lost 1 point');
        score--;
        document.querySelector('.score').textContent = score;
    }} else {
        displayMessage('Game over! You lost!');
        document.querySelector('.score').textContent = 0;
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
