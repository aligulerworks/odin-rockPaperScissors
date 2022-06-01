'use strict';

// VARIABLES

// Variables for Start Modal
const startModal = document.getElementById('start-modal');
const start = document.getElementById('start');

// Buttons
const rock = document.getElementById('rock-btn');
const paper = document.getElementById('paper-btn');
const scissors = document.getElementById('scissors-btn');

// Computer reactions
const smash = document.getElementById('smash');

// Materials
const userRock = document.getElementById('user-rock');
const userPaper = document.getElementById('user-paper');
const userScissors = document.getElementById('user-scissors');

const pcRock = document.getElementById('pc-rock');
const pcPaper = document.getElementById('pc-paper');
const pcScissors = document.getElementById('pc-scissors');

// Scores and Rounds
const roundBoard = document.getElementById('round-board');
let round = 0,
  userScore = 0,
  compScore = 0;
let scores = document.getElementById('scores');
console.log(scores);

const detachListeners = () =>
  document.querySelector('body').removeEventListener('click', listenerFunction);

// HIT START
start.addEventListener('click', gameStart);

//GAME - ok
function gameStart() {
  startModal.remove();
  document.querySelector('#game-buttons').addEventListener('click', game);
}

function game(e) {
  e.preventDefault;

  let userS = e.target.textContent.toLowerCase();
  let compS = computerPlay();
  console.log(userS, compS);


  if (round < 4) {
    actionS('user', userS);
    actionS('pc', compS);
    if (compS === userS) {
      smash.textContent = `It's a Draw Barrymoore!`;
      BringUp(smash);
      scoreBringer(scores);
      round++;
    } else if (
      (compS === 'rock') & (userS === 'scissors') ||
      (compS === 'paper') & (userS === 'rock') ||
      (compS === 'scissors') & (userS === 'paper')
    ) {
      smash.textContent = `You loose(r)! ${compS} beats ${userS}!`;
      round++;
      compScore++;
    } else if (userS === 'rock' || userS === 'paper' || userS === 'scissors') {
      smash.textContent = `You win! ${userS} beats ${compS}!`;
      round++;
      userScore++;
    } else {
      smash.textContent = `Come on! You can do it!`;
    }
    roundBoard.textContent = `Round: ${round}`;
  } else {
    gameResult(userScore, compScore);
  }
  scores.textContent = `You: ${userScore} : Me: ${compScore}`;


}

function gameResult(uS, cS) {
  roundBoard.textContent = 'Finished!';

  if (uS > cS) {
    smash.textContent = `YOU WIN!`;
    console.log(`YOU WIN!`);
  } else if (uS < cS) {
    smash.textContent = `I WIN MADAFAKA!`;

    console.log('I WIN MADAFAKA!');
  } else {
    smash.textContent = `TIED!`;
    console.log(`WE'RE TIED.`);
  }
}

// COMPUTER PLAY - OK
function computerPlay() {
  let generator = Math.floor(Math.random() * 3) + 1;
  let compS;
  switch (generator) {
    case 1:
      compS = 'rock';
      break;
    case 2:
      compS = 'paper';
      break;
    case 3:
      compS = 'scissors';
      break;
  }
  return compS;
}

//ANIMATIONS - MATERIALS

 //helps enable animate the same object again - only for rps
 const voider = (material) => {
  material.classList.remove('move-right');
  material.classList.remove('move-left');
  void material.offsetWidth;
}

function actionS(from, score) {
  const moveRight = (material) => {
    material.classList.add('move-right');
  };
  const moveLeft = (material) => {
    material.classList.add('move-left');
  };
 
 

  // animate what to where
  if (from == 'user') {
    if (score == 'rock') {
      voider(userRock);
      voider(userPaper);
      voider(userScissors);
      moveRight(userRock);
    } else if (score == 'paper') {
      voider(userRock);
      voider(userPaper);
      voider(userScissors);
      moveRight(userPaper);
    } else if (score == 'scissors') {
      voider(userRock);
      voider(userPaper);
      voider(userScissors);
      moveRight(userScissors);
    }
  } else if (from == 'pc') {
    if (score == 'rock') {
      voider(pcRock);
      voider(pcPaper);
      voider(pcScissors);
      moveLeft(pcRock);
    } else if (score == 'paper') {
      voider(pcRock);
      voider(pcPaper);
      voider(pcScissors);
      moveLeft(pcPaper);
    } else if (score == 'scissors') {
      voider(pcRock);
      voider(pcPaper);
      voider(pcScissors);
      moveLeft(pcScissors);
    }
  } 
 
}

//ANIMATIONS - SCORE SMASH
//smasher


function BringUp(toBring) {
  console.log(toBring);
  voider(toBring);
  toBring.classList.add('bring-front');
  
}

//scores
function scoreBringer(toBring) {
  console.log(toBring);
  toBring.classList.add('score-bringer');
  voider(toBring);

}




// ANIMATIONS WITH KEYFRAMES

