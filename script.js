'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Lets go...!';
document.querySelector('.number').textContent = 21;
document.querySelector('.score').textContent = 18;
document.querySelector('.guess').value = 14;*/
const num = document.querySelector('.number');
const msg = document.querySelector('.message');
let magicNumber = Math.trunc(Math.random() * 20) + 1;
const dispScore = document.querySelector('.score');
const dispHigh = document.querySelector('.highscore');
const body = document.querySelector('body');
const again = document.querySelector('.again');
const inputBox = document.querySelector('.guess');
let highscore = 0;
let score = 20;
console.log(magicNumber);
const check = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number entered';
  } else if (guess === magicNumber) {
    num.textContent = magicNumber + '😂';
    msg.textContent = '🎉 Correct Number';
    if (score > highscore) {
      dispHigh.textContent = score;
    }
    body.style.backgroundColor = 'green';
    num.style.width = '30rem';
  } else if (magicNumber !== guess) {
    score--;
    dispScore.textContent = score;
    if (guess > magicNumber) {
      msg.textContent = '😳 Too High';
    } else if (guess < magicNumber) {
      msg.textContent = '😟 Too Low';
    }
  }
};
const againbtn = function () {
  score = 20;
  magicNumber = Math.trunc(Math.random() * 20) + 1;
  dispScore.textContent = 20;
  body.style.backgroundColor = 'black';
  num.textContent = '?';
  msg.textContent = 'Start Guessing Again..!';
  inputBox.value = '';
};

document.querySelector('.check').addEventListener('click', check);
again.addEventListener('click', againbtn);
