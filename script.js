let playerPoints = 0;
let computerPoints = 0;
let container = document.querySelector('#container')

const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');

rock.textContent = 'Rock';
paper.textContent = 'Paper';
scissors.textContent = 'Scissors';

//add event listeners to automatically invoke the playRound function with the player's button choice
rock.addEventListener('click', () => playRound(rock.textContent, getComputerChoice));
paper.addEventListener('click', () => playRound(paper.textContent, getComputerChoice));
scissors.addEventListener('click', () => playRound(scissors.textContent, getComputerChoice));

container.append(rock, paper, scissors);

//get a random option from an array of 3 options
function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors'];
  let random = Math.floor(Math.random() * 3);
  return options[random];
}

let results = document.createElement('div');
results.textContent = 'Click a button to play the game!'
container.appendChild(results);

//determines a winner or loser of a round of rps
function playRound(playerSelection, computerSelection) {
  //get the choices and make them case insensitive 
  let player = playerSelection.toLowerCase();
  let computer = computerSelection();

  //capitalize the first letter of the choices
  let capP = player[0].toUpperCase() + player.slice(1); 
  let capC = computer[0].toUpperCase() + computer.slice(1); 

  let message; 

  //rock > scissors; scissors > paper; paper > rock
  if ( (player == 'rock' && computer == 'scissors') 
    || (player == 'scissors' && computer == 'paper') 
    || (player == 'paper' && computer == 'rock')
    ) {
    playerPoints += 1;
    message = `You Win! ${capP} beats ${computer}!`;
  } else if (player == computer) {
    message = `You both chose ${player} and Tied! No one wins!`;
  } else {
    computerPoints += 1;
    message = `You Lose! ${capC} beats ${player}!`;
  }
  results.textContent = message;
}

//playGame uses playRound to play 5 rounds
//after 5 rounds, playGame compares the points and logs a message saying win, lose, or tie
function playGame() {
  
  if (playerPoints > computerPoints) {
    console.log(`You win! You won ${playerPoints} / 5 games!`);
  } else if (playerPoints < computerPoints) {
    console.log(`You lose! The computer won ${computerPoints} / 5 games!`);
  } else {
    console.log(`It's a tie! You both won ${playerPoints} / 5 games!`);
  }

  //reset the scores for a new game
  playerPoints = 0;
  computerPoints = 0;
}

playGame();