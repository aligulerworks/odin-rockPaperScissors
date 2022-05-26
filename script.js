'use strict';

// VARIABLES
// Variables for Start Modal & Buttons
const startModal = document.getElementById('start-modal');
const start = document.getElementById('start');
//buttons
const rock = document.getElementById('rock-btn');
const paper = document.getElementById('paper-btn');
const scissors = document.getElementById('scissors-btn');

// materials
const userRock = document.getElementById('user-rock');
const userPaper = document.getElementById('user-paper');
const userScissors = document.getElementById('user-scissors');

const pcRock = document.getElementById('pc-rock');
const pcPaper = document.getElementById('pc-paper');
const pcScissors = document.getElementById('pc-scissors');

// ROUND COUNTER
const checkRound = function (hit) {
  true;
};

computerPlay;

// COMPUTER PLAY
function computerPlay() {
  let result,
    generator = Math.floor(Math.random() * 3) + 1;

  if (generator === 1) {
    pcPaper.style.visibility = 'hidden';
    pcScissors.style.visibility = 'hidden';

    pcPaper.style.transform = 'translate(60vw, 0)';
    pcScissors.style.transform = 'translate(60vw, 0)';

    pcRock.style.visibility = 'visible';
    pcRock.style.transform = 'translate(-60vw, 0)';
    result = 'rock';
  }
  if (generator === 2) {
    pcRock.style.visibility = 'hidden';
    pcScissors.style.visibility = 'hidden';

    pcRock.style.transform = 'translate(60vw, 0)';
    pcScissors.style.transform = 'translate(60vw, 0)';

    pcPaper.style.visibility = 'visible';
    pcPaper.style.transform = 'translate(-60vw, 0)';
    result = 'paper';
  }
  if (generator === 3) {
    pcRock.style.visibility = 'hidden';
    pcPaper.style.visibility = 'hidden';

    pcRock.style.transform = 'translate(60vw, 0)';
    pcPaper.style.transform = 'translate(60vw, 0)';

    pcScissors.style.visibility = 'visible';
    pcScissors.style.transform = 'translate(-60vw, 0)';
    result = 'scissors';
  }
  return generator;
}

// USER ACTION
function userPlay() {
  rock.addEventListener('click', () => {
    userPaper.style.visibility = 'hidden';
    userScissors.style.visibility = 'hidden';

    userPaper.style.transform = 'translate(-60vw, 0)';
    userScissors.style.transform = 'translate(-60vw, 0)';

    userRock.style.visibility = 'visible';
    userRock.style.transform = 'translate(60vw, 0)';
    computerPlay();
    return 1;
  });

  paper.addEventListener('click', () => {
    userRock.style.visibility = 'hidden';
    userScissors.style.visibility = 'hidden';

    userRock.style.transform = 'translate(-60vw, 0)';
    userScissors.style.transform = 'translate(-60vw, 0)';

    userPaper.style.visibility = 'visible';
    userPaper.style.transform = 'translate(60vw, 0)';
    computerPlay();
    return 2;
  });

  scissors.addEventListener('click', () => {
    userRock.style.visibility = 'hidden';
    userPaper.style.visibility = 'hidden';

    userRock.style.transform = 'translate(-60vw, 0)';
    userPaper.style.transform = 'translate(-60vw, 0)';

    userScissors.style.visibility = 'visible';
    userScissors.style.transform = 'translate(60vw, 0)';
    computerPlay();
    return 3;
  });
}

function game() {
  // scores & counters ready
  let playerScore = 0,
    computerScore = 0;

  //remove Starter
  startModal.remove();
}
// A ROUND
userPlay();
if (userPlay === computerPlay) {
  console.log(
    `It's a Draw Barrymoore!
Yours: ${player}
Mine: ${computer}
      `
  );
} else if (
  (userPlay() === 1) & (computerPlay() === 2) ||
  (userPlay() === 3) & (computerPlay() === 1) ||
  (userPlay() === 2) & (computerPlay() === 3)
) {
  computerScore = computerScore + 1;
  console.log(
    `You loose!
                  Yours: ${playerPick}
                  Mine: ${computerPick}`
  );
} else if (userPlay() === 1 || userPlay() === 2 || userPlay() === 3) {
  playerScore = playerScore + 1;
  console.log(
    `You win!
Yours: ${playerPick}
Mine: ${computerPick}`
  );
} else {
  false;
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

// Start
start.addEventListener('click', game);
