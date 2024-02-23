let playerPoints = 0;
let computerPoints = 0;

let getPlayerChoice = () => {
  return prompt('Rock, paper, or scissors?');
};

//get a random option from an array of 3 options
function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors'];
  let random = Math.floor(Math.random() * 3);
  return options[random];
}

const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');

rock.textContent = 'Rock';
paper.textContent = 'Paper';
scissors.textContent = 'Scissors'


//determines a winner or loser of a round of rps
function playRound(playerSelection, computerSelection) {
  //get the choices and make them case insensitive 
  let player = playerSelection().toLowerCase();
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
    return message = `You Win! ${capP} beats ${computer}!`;
  } else if (player == computer) {
    return message = `You both chose ${player} and Tied! No one wins!`;
  } else {
    computerPoints += 1;
    return message = `You Lose! ${capC} beats ${player}!`;
  }
}

//playGame uses playRound to play 5 rounds
//after 5 rounds, playGame compares the points and logs a message saying win, lose, or tie
function playGame() {
  // let round = 0;
  // for (let i = 0; i < 5; i++) {
  //   round += 1; 
  //   console.log('Round: ', round, playRound(getPlayerChoice, getComputerChoice));
  // }
  
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