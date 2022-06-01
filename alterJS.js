'use strict';

// VARIABLES

// Values
let playerScore = 0,
  computerScore = 0;

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

// Scores and related
let scoreS = document.getElementById('scores');

const detachListeners = () =>
  document.querySelector('body').removeEventListener('click', listenerFunction);

// HIT START
start.addEventListener('click', gameStart);

// RESETS
const resetAnimations = () => {
  userRock.style.cssText = `
  transform: translate(-62vw);
  
  `;
};

//GAME - ok
function gameStart() {
  startModal.remove();
  (playerScore = 0), (computerScore = 0);

  document.querySelector('#game-buttons').addEventListener('click', game);
}

function game(e) {
  let userS = e.target.textContent.toLowerCase();
  let compS = computerPlay();

  actionS('user', userS);

  playRound(userS, compS);
  console.log(userS, compS);
  console.log(playRound());
  playRound() === 1
    ? (playerScore += 1)
    : playRound === -1
    ? (computerScore += 1)
    : (scoreS.textContent = `You: ${playerScore} : Me: ${computerScore}`);
}

// PLAY A ROUND
function playRound(playerSelection, computerSelection) {
  let computer = computerSelection;
  let player = playerSelection;

  if (player === computer) {
    smash.textContent = `It's a Draw Barrymoore!`;
    return 0;
  } else if (
    (player === 'rock') & (computer === 'paper') ||
    (player === 'scissors') & (computer === 'rock') ||
    (player === 'paper') & (computer === 'scissors')
  ) {
    smash.textContent = `You loose(r)! ${computer} beats ${player}!`;
    return -1;
  } else if (player === 'rock' || player === 'paper' || player === 'scissors') {
    smash.textContent = `You win! ${player} beats ${computer}!`;
    return 1;
  } else {
    smash.textContent = `Come on! You can do it!`;
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
  actionS('pc', compS);
  return compS;
}

function gameResult(player, computer) {
  if (player > computer) {
    console.log(`YOU WIN!`);
  } else if (player < computer) {
    console.log('I WIN MADAFAKA!');
  } else {
    console.log(`WE'RE TIED.`);
  }
}

//ANIMATIONS AFTER HIT RPS BUTTONS
function actionS(from, score) {
  const moveRight = (material) => {
    material.style.transform = 'translate(62vw, 0)';
  };
  const moveLeft = (material) => {
    material.style.transform = 'translate(-62vw, 0)';
  };
  const hide = (material) => {
    material.style.visibility = 'hidden';
  };
  const show = (material) => {
    material.style.visibility = 'visible';
  };

  // animate what to where

  if (from == 'user') {
    if (score == 'rock') {
      hide(userRock);
      moveLeft(userRock);
      hide(userPaper);
      hide(userScissors);
      moveLeft(userPaper);
      moveLeft(userScissors);
      show(userRock);
      moveRight(userRock);
    } else if (score == 'paper') {
      hide(userRock);
      hide(userScissors);
      moveLeft(userPaper);
      moveLeft(userRock);
      moveRight(userPaper);
      show(userPaper);
    } else if (score == 'scissors') {
      hide(userRock);
      hide(userPaper);
      moveLeft(userRock);
      moveLeft(userPaper);
      moveRight(userScissors);
      show(userScissors);
    }
  } else if (from == 'pc') {
    if (score == 'rock') {
      hide(pcPaper);
      hide(pcScissors);
      moveRight(pcPaper);
      moveRight(pcScissors);
      moveLeft(pcRock);
      show(pcRock);
    } else if (score == 'paper') {
      hide(pcRock);
      hide(pcScissors);
      moveRight(pcPaper);
      moveRight(pcRock);
      moveLeft(pcPaper);
      show(pcPaper);
    } else if (score == 'scissors') {
      hide(pcRock);
      hide(pcPaper);
      moveRight(pcRock);
      moveRight(pcPaper);
      moveLeft(pcScissors);
      show(pcScissors);
    }
  }
}

//ANIMATION - scoresmash
function rotateNBringUp(from, material) {
  console.log(material);
  if (from == 'pc' && material == 'rock') {
    pcRock.style.zIndex = 10;
    pcRock.style.transform = 'rotate(90deg);';
    pcRock.style.transform = 'scale(120%);';
  } else if (from == 'pc' && material == 'paper') {
    pcPaper.style.zIndex = 10;
    pcPaper.style.transform = 'rotate(90deg);';
    pcPaper.style.transform = 'scale(120%);';
  }
}
