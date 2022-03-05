function computerPlay() {
  let random = Math.floor(Math.random() * 3 + 1);
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
      return 1;
  } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
      return 1;
  } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
      return 1;
  } else if (playerSelection == computerSelection) {
      return 3;
  } else {
      return 2;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay();
    let playerSelection;
    while (true) {
      playerSelection = prompt('Please choose either Rock, Paper or Scissors').toLowerCase();
      if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') break;
    }
    let firstLetter = playerSelection.slice(0, 1);
    playerSelection = playerSelection.replace(firstLetter, firstLetter.toUpperCase());
    result = playRound(playerSelection, computerSelection);
    if (result == 1) {
      console.log(`You win this round. ${playerSelection} beats ${computerSelection}.`);
      win++;
    } else if (result == 2) {
      console.log(`You lose this round. ${computerSelection} beats ${playerSelection}`);
      loss++;
    } else {
      console.log('Draw.');
    }
  }
  if (win > loss) {
    console.log(`You win the game ${win} to ${loss}.`);
  } else if (loss > win) {
    console.log(`You lose the game ${loss} to ${win}.`)
  } else {
    console.log('Its a draw.')
  }
    
}

let win = 0;
let loss = 0;
game();