function computerPlay() {
  let random = Math.floor(Math.random() * 3 + 1);
  if (random === 1) {
      return 'Rock';
    } else if (random === 2) {
      return 'Paper';
    } else {
      return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
      return 1;
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
      return 1;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
      return 1;
  } else if (playerSelection === computerSelection) {
      return 3;
  } else {
      return 2;
  }
}

const buttons = document.querySelectorAll('button');
const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const div3 = document.querySelector('#div3');

div1.style.marginTop = '10px';
div2.style.marginTop = '10px';
div3.style.cssText = 'margin-top: 20px; font-size: 36px; font-weight: bold;';

let scorePlayer = 0;
let scoreComputer = 0;

  for (let button of buttons) {
    button.addEventListener('click', () => {
      div3.textContent = '';
      let computerSelection = computerPlay();
      let playerSelection;
      if (button.id === 'btn1') {
        playerSelection = 'Rock';
      } else if (button.id === 'btn2') {
        playerSelection = 'Paper';
      } else if (button.id === 'btn3') {
        playerSelection = 'Scissors';
      }

      let result = playRound(playerSelection, computerSelection);
      
      if (result === 1) {
        div1.style.color = 'green';
        div1.textContent = `You win this round. ${playerSelection} beats ${computerSelection}.`;
        scorePlayer++;
        } else if (result === 2) {
        div1.style.color = 'red';
        div1.textContent = `You lose this round. ${computerSelection} beats ${playerSelection}`;
        scoreComputer++;
      } else {
        div1.style.color = 'blue';
        div1.textContent = 'This round is a Draw.';
      }

      div2.textContent = `Player: ${scorePlayer} | Computer: ${scoreComputer}`

      if (scorePlayer === 5) {
        div3.style.color = 'green';
        div3.textContent = 'Player wins this game.'
        scorePlayer = 0;
        scoreComputer = 0;
      } else if (scoreComputer === 5) {
        div3.style.color = 'red';
        div3.textContent = 'Computer wins this game.'
        scorePlayer = 0;
        scoreComputer = 0;
      }
    })
  }

