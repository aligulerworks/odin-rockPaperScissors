'use strict';

// VARIABLES

// Variables for Start Modal
const startModal = document.getElementById('start-modal');
const start = document.getElementById('start');
const scoreBoard = document.querySelector('.scoreboard');

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

const draw = document.getElementById('draw');

// Banger-Shaker
const bang = document.getElementById('bang');

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

// GAME 
function gameStart() {
  startModal.style.display = 'none';
  compScore = 0,
  userScore = 0,
  round = 0;
  scores.textContent = `You: ${userScore} : Me: ${compScore}`;
  smash.textContent = `Bring it on!`;
  bringFront(smash);
  userRock.classList.remove('winner');
  userPaper.classList.remove('winner');
  userScissors.classList.remove('winner');
  draw.classList.remove('raise-drew');
  document.querySelector('#game-buttons').addEventListener('click', game);
}

function game(e) {
  e.preventDefault;

  let userS = e.target.textContent.toLowerCase();
  let compS = computerPlay();
  console.log(userS, compS);
  const comparator = () => {
    if (compS === userS) {
      smash.textContent = `It's a Draw Barrymoore!`;
      bringFront(smash);
      scoreBringer(scores);
      winner(3);
    } else if (
      (compS === 'rock') & (userS === 'scissors') ||
      (compS === 'paper') & (userS === 'rock') ||
      (compS === 'scissors') & (userS === 'paper')
    ) {
      smash.textContent = `You loose(r)! ${compS} beats ${userS}!`;
      compScore++;
      bringFront(smash);
      scoreBringer(scores);
      winner(compS);
    } else if (userS === 'rock' || userS === 'paper' || userS === 'scissors') {
      smash.textContent = `You win! ${userS} beats ${compS}!`;
      userScore++;
      bringFront(smash);
      scoreBringer(scores);
      winner(userS);
    } else {
      smash.textContent = `Come on! You can do it!`;
      bringFront(smash);
    }
  }

  if (round <= 3) {
    actionS('user', userS);
    actionS('pc', compS);
    comparator();
    round++;
    roundBoard.textContent = `Round: ${round}`;
  } else if( round === 4) {
    actionS('user', userS);
    actionS('pc', compS);
    comparator();
    round++;
    roundBoard.textContent = `Round: ${round}`;
    setTimeout(() => {
      gameResult(userScore, compScore);
    }, "3300")   
  } else {}
  scores.textContent = `You: ${userScore} : Me: ${compScore}`;


}


// FINISH AND RESTART
function gameResult(uS, cS) {
  roundBoard.textContent = 'Finished!';
  startModal.style.display = '';
  scoreBoard.style.zIndex = '6';
  smash.style.zIndex = '6';
  start.textContent = 'Restart?';


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

function actionS(from, score) {
  const moveRight = (material) => {
    material.classList.add('move-right');
    setTimeout(() => {
      material.classList.remove('move-right');
      void material.offsetWidth;
       }, "2000")
  };
  const moveLeft = (material) => {
     material.classList.add('move-left');
     setTimeout(() => {
      material.classList.remove('move-left');
      void material.offsetWidth;
       }, "2000")
  };
 
 

  // animate what to where
  if (from == 'user') {
    if (score == 'rock') {
       moveRight(userRock);
    } else if (score == 'paper') {
      moveRight(userPaper);
    } else if (score == 'scissors') {
      moveRight(userScissors);
    }
  } else if (from == 'pc') {
    if (score == 'rock') {
      moveLeft(pcRock);
    } else if (score == 'paper') {
      moveLeft(pcPaper);
    } else if (score == 'scissors') {
      moveLeft(pcScissors);
    }
  } 
 
}

//ANIMATIONS - SCORE SMASH
//smasher
function bringFront(mat) {
  console.log(mat);
  mat.classList.remove('bring-front');
  void mat.offsetWidth;
  mat.classList.add('bring-front');
  
  setTimeout(() => {
   bang.classList.add('banger');
 }, "744");
  setTimeout(() => {
     bang.classList.remove('banger');
   }, "2000");

  
}

// animation - scores
function scoreBringer(mat) {
  console.log(mat);
  mat.classList.remove('score-bringer');
  void mat.offsetWidth;
  mat.classList.add('score-bringer');

}


// animation - winner material

function winner(mat) {
   userRock.classList.remove('winner');
   userPaper.classList.remove('winner');
   userScissors.classList.remove('winner');
   draw.classList.remove('raise-drew');
   void userRock.offsetWidth;
   if(mat == 'rock') {
      setTimeout(() => {
         userRock.classList.add('winner');
         }, "1000")
   } else if (mat == 'paper') {
         setTimeout(() => {
         userPaper.classList.add('winner');
         }, "1000")

   } else if (mat == 'scissors') {
         setTimeout(() => {
         userScissors.classList.add('winner');
         }, "1000")

   } else if (mat == 3) {
     console.log(mat);
    setTimeout(() => {
    draw.classList.add('raise-drew');
    }, "1000")

} 


}
