"use strict";

// HOW IT GOES
// computer ready
// player ready
// player plays (so computer does not get tired for nothing)
// when player attempts to play computer plays too
// both results collected in somewhere (function?)
// results checked for typo or any jokes
// if everything's fine, results compared and presented with who the winner is

// computer ready
function computerPlay() {
  let result;
  let generator = Math.floor(Math.random() * 3) + 1;
  if (generator === 1) {
    result = "rock";
  }
  if (generator === 2) {
    result = "paper";
  }
  if (generator === 3) {
    result = "scissors";
  }
  return result;
}

// Start
// function game() {
//    const startTheGame = confirm(`You wanna play?`);
//
//    if (startTheGame === false) {
//       console.log('Good day sir!');
//    } else {
// // Rounds Counter
//       for (let i = 1; i < 6; i++) {
//        console.log(`Round: ${i}`);
//          playRound(playerPlay(),computerPlay()) };
//       console.log (`--- FINISHED ---
//       YOU: ${playerScore}
//       ME: ${computerScore}`);
//       gameResult(playerScore, computerScore);
//    };
// };

// scores & counters ready
let playerScore = 0;
let computerScore = 0;
let forLoopCounter = 0; // to replay the round when typo mistake happens.

// Let player play

//buttons
const rock = document.getElementById("rock-btn");
const paper = document.getElementById("paper-btn");
const scissors = document.getElementById("scissors-btn");

// materials
const userRock = document.getElementById("user-rock");
const userPaper = document.getElementById("user-paper");
const userScissors = document.getElementById("user-scissors");

const pcRock = document.getElementById("pc-rock");
const pcPaper = document.getElementById("pc-paper");
const pcScissors = document.getElementById("pc-scissors");

rock.addEventListener("click", (e) => {
  console.log(e);

  userPaper.style.visibility = "hidden";
  userScissors.style.visibility = "hidden";

  userPaper.style.transform = "translate(-60vw, 0)";
  userScissors.style.transform = "translate(-60vw, 0)";

  userRock.style.visibility = "visible";
  userRock.style.transform = "translate(62vw, 0)";
});

paper.addEventListener("click", (e) => {
  console.log(e);

  userRock.style.visibility = "hidden";
  userScissors.style.visibility = "hidden";

  userRock.style.transform = "translate(-60vw, 0)";
  userScissors.style.transform = "translate(-60vw, 0)";

  userPaper.style.visibility = "visible";
  userPaper.style.transform = "translate(60vw, 0)";
});

scissors.addEventListener("click", (e) => {
  console.log(e);

  userRock.style.visibility = "hidden";
  userPaper.style.visibility = "hidden";

  userRock.style.transform = "translate(-60vw, 0)";
  userPaper.style.transform = "translate(-60vw, 0)";

  userScissors.style.visibility = "visible";
  userScissors.style.transform = "translate(60vw, 0)";
});

// Start the game for both parties
function playRound(playerSelection, computerSelection) {
  let computer = computerSelection;
  let player = playerSelection;

  if (player === computer) {
    console.log(
      `It's a Draw Barrymoore!
Yours: ${player}
Mine: ${computer}
      `
    );
  } else if (
    (player === "rock") & (computer === "paper") ||
    (player === "scissors") & (computer === "rock") ||
    (player === "paper") & (computer === "scissors")
  ) {
    computerScore = computerScore + 1;
    console.log(
      `You loose!
                  Yours: ${player}
                  Mine: ${computer}`
    );
  } else if (player === "rock" || player === "paper" || player === "scissors") {
    playerScore = playerScore + 1;
    console.log(
      `You win!
Yours: ${player}
Mine: ${computer}`
    );
  } else {
    forLoopCounter = forLoopCounter - 1;
    console.log(`
This what is either a typo or you're a horrible person. 
Here is what you wrote: ${player.toUpperCase()}. 
Are you happy???`);
  }
}

function gameResult(player, computer) {
  if (player > computer) {
    console.log(`YOU WIN!`);
  } else if (player < computer) {
    console.log("I WIN MADAFAKA!");
  } else {
    console.log(`WE'RE TIED.`);
  }
}

// game();
