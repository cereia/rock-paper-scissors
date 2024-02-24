let playerPoints = 0;
let computerPoints = 0;
let container = document.querySelector('#container')

let round = document.createElement('div');
round.textContent = 'Click a button to play the game!'
container.appendChild(round);

let score = document.createElement('div');
score.textContent = 'Player: 0 Computer: 0';
container.appendChild(score);

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
  round.textContent = message;
  score.textContent = `Player: ${playerPoints} Computer: ${computerPoints}`;
}

//add playGame to player buttons so the points can be checked to determine a game winner
rock.addEventListener('click', playGame);
paper.addEventListener('click', playGame);
scissors.addEventListener('click', playGame);

const finalResult = document.createElement('h2');
container.appendChild(finalResult);
let initialMessage = 'Get to 5 points first to win!';
finalResult.textContent = initialMessage;

//reset the point values and give a final win/loss message upon reaching 5 wins
function playGame() {
  finalResult.textContent = initialMessage;
  let winLossMessage;

  if (playerPoints === 5) {
    playerPoints = 0;
    computerPoints = 0;
    winLossMessage = `You win! You got 5 points first!`;
    finalResult.textContent = winLossMessage;
  } else if (computerPoints === 5) {
    playerPoints = 0;
    computerPoints = 0;
    winLossMessage = `You lost! The computer got 5 points first!`;
    finalResult.textContent = winLossMessage;
  }
}