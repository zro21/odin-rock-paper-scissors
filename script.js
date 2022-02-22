
let random = Math.floor(Math.random() * 3 + 1);
function computerPlay() {
  if (random == 1) {
      return 'Rock';
    } else if (random == 2) {
      return 'Paper';
    } else {
      return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
      return `You win. ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
      return `You win. ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
      return `You win. ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection === computerSelection) {
      return 'Draw.'
  } else {
      return `You lose. ${computerSelection} beats ${playerSelection}`;
  }
}

let computerSelection = computerPlay();
let playerSelection = 'Scissors';

playRound(playerSelection, computerSelection);