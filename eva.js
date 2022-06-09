let round = 1,
  human = 0,
  machine = 0,
  phrase = 'Choose yer poison, Human!',
  machinePhrase = 'The Machine won!',
  humanPhrase = 'The Human won!',
  buttons = document.querySelectorAll('button');

function startGame() {
  document.querySelector('body').addEventListener('click', listenerFunction);
}

function listenerFunction(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  let poison = e.target.textContent.toLowerCase(),
    antidote = machineChoice(),
    message = `The Human chose ${poison}. The machine chose ${antidote}. `;

  // Who won?
  if (poison == antidote) {
    message = `Both the Human and the Machine chose ${poison}. This is a tie. No one won!`;
  } else if (poison == 'rock') {
    if (antidote == 'paper') {
      message += machinePhrase;
      machine++;
    } else {
      message += humanPhrase;
      human++;
    }
  } else if (poison == 'paper') {
    if (antidote == 'scissors') {
      message += machinePhrase;
      machine++;
    } else {
      message += humanPhrase;
      human++;
    }
  } else {
    if (antidote == 'rock') {
      message += machinePhrase;
      machine++;
    } else {
      message += humanPhrase;
      human++;
    }
  }

  updateScoresAndWriteMessage(message);
}

function machineChoice() {
  return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

function updateScoresAndWriteMessage(message) {
  document.querySelector('#outcome').textContent = message;
  document.querySelector('#score-human .score').textContent = human;
  document.querySelector('#score-machine .score').textContent = machine;

  // Disable all the buttons for 3 seconds
  buttons.forEach((b) => (b.disabled = true));
  // Detach all event listeners
  document.querySelector('body').removeEventListener('click', listenerFunction);

  setTimeout(() => {
    // Check if we may play another round
    if (round < 5) {
      // Enable the buttons
      buttons.forEach((b) => (b.disabled = false));
      // Change the round
      round++;
      // Update the round
      document.querySelector('#round .number').textContent = round;
      // Clear the outcome message
      document.querySelector('#outcome').textContent = phrase;
      // Restart the round and reatach the event listeners
      startGame();
    }
    // If the game ended
    else {
      document.querySelector('#result').textContent = `${
        human == machine
          ? 'This is a tie. No one '
          : human > machine
          ? 'The Human '
          : 'The Machine '
      } won! Game ended.`;
    }
  }, 3000);
}

startGame();
