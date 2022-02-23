function computerPlay() {
  let random = Math.floor(Math.random() * 3 + 1);
  if (random == 1) {
      return 'rock';
    } else if (random == 2) {
      return 'paper';
    } else {
      return 'scissors';
    }
}

function playerPlay() {
  let selection = prompt('Please choose either Rock, Paper or Scissors');
  selection = selection.toLowerCase();
  return selection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
      return 1;
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
      return 1;
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
      return 1;
  } else if (playerSelection == computerSelection) {
      return 3;
  } else {
      return 2;
  }
}

function game() {
  let win = 0;
  let loss = 0;
  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
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
    console.log(`You win the game ${win} to ${lose}.`);
  } else if (loss > win) {
    console.log(`You lose the game ${lose} to ${win}.`)
  } else {
    console.log('Its a draw.')
  }
    
}

game();