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
function kickStart() {
   const startTheGame = confirm(`You wanna play?`);
   if (startTheGame === true) {playRound(playerPlay(),computerPlay())}
else {
   console.log('Good day sir!');
}
}



   

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
   {
         console.log(
`You loose!
Yours: ${player}
Mine: ${computer}`)
      
   } else if (
      (player === 'rock') ||
      (player === 'paper') ||
      (player === 'scissors')
   ) 
   
   {
      console.log(
`You win!
Yours: ${player}
Mine: ${computer}`)

   } else {
      console.log(`
This what is either a typo or you're a horrible person. 
Here is what you wrote: ${player.toUpperCase()}. 
Are you happy???`)

   }

}



kickStart();