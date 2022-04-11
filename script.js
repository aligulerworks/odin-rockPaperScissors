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
   let generator = (Math.floor(Math.random() * 3) +1);
   if (generator === 1) { result = "rock"};
   if (generator === 2) { result = "paper"};
   if (generator === 3) { result = "scissors"};
   return result;
}

// player ready?
function game() {
   const startTheGame = confirm(`You wanna play?`);

   if (startTheGame === false) {
      console.log('Good day sir!');
   } else {
      for (forLoopCounter = 1; forLoopCounter < 6; forLoopCounter++) {
      console.log(`Round: ${forLoopCounter}`);
      playRound(playerPlay(),computerPlay()) }
      console.log (`--- FINISHED ---
      YOU: ${playerScore}
      ME: ${computerScore}`);
      gameResult(playerScore, computerScore);
   }
}

// scores & counters ready
let playerScore = 0;
let computerScore = 0;
let forLoopCounter = 0; // to replay the round when typo mistake happens.

// Let player play 
function playerPlay() {
   let playerSelection = (prompt('Rock, Paper or Scissors?')).toLowerCase();
   return playerSelection;
}


// Start the game for both parties
function playRound(playerSelection, computerSelection) {
   let computer = computerSelection;
   let player = playerSelection;
 
   if ( player === computer) {
      console.log(
`It's a Draw Barrymoore!
Yours: ${player}
Mine: ${computer}
      `)
   } else if 
      (( player === 'rock' & computer === 'paper' ) ||
      ( player === 'scissors' & computer === 'rock' ) || 
      ( player === 'paper' & computer === 'scissors' ))
   {  computerScore = computerScore + 1;
         console.log(
                  `You loose!
                  Yours: ${player}
                  Mine: ${computer}`)
      
   } else if (
      (player === 'rock') ||
      (player === 'paper') ||
      (player === 'scissors')
   ) 
   
   {  playerScore = playerScore + 1;
      console.log(
`You win!
Yours: ${player}
Mine: ${computer}`)

   } else {
      forLoopCounter = forLoopCounter - 1;
      console.log(`
This what is either a typo or you're a horrible person. 
Here is what you wrote: ${player.toUpperCase()}. 
Are you happy???`)

   }

}

function gameResult(player, computer) {
   if (player > computer) {
      console.log(`YOU WIN!`)
   } else if (player < computer) {
      console.log('I WIN MADAFAKA!')
   } else {
      console.log(`WE'RE TIED.`)
   }
   
}



game();

