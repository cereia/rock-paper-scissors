//create a function to determine the computer's choice
//create a function that compares the computer and player's choices
//create a function that determines the overall winner after 5 rounds

// let computer;
// let player;
let playerPoints = 0;
let computerPoints = 0;

let playerChoice = () => {
  // return player = prompt('Rock, paper, or scissors?')
  return prompt('Rock, paper, or scissors?');
};

function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors'];
  let random = Math.floor(Math.random() * 3);
  // return computer = options[random];
  return options[random];
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection().toLowerCase();
  let computer = computerSelection().toLowerCase();
  let capP = player[0].toUpperCase() + player.slice(1); //capitalized player
  let capC = computer[0].toUpperCase() + computer.slice(1); //capitalized computer
  
  let message;
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

//play game function has to use the previous function playRound to play 5 rounds
//after 5 rounds, throw a message saying win, lose, or tie

function playGame() {
  let count = 0;
  for (let i = 0; i < 5; i++) {
    count += 1; 
    console.log('Round: ', count, playRound(playerChoice, getComputerChoice));
  }
  if(playerPoints > computerPoints) {
    console.log(`You win! You won ${playerPoints} / 5 games!`);
  } else if (playerPoints < computerPoints) {
    console.log(`You lose! The computer won ${computerPoints} / 5 games!`);
  } else {
    console.log(`It's a tie! You both won ${playerPoints} / 5 games!`);
  }
  playerPoints = 0;
  computerPoints = 0;
}

playGame();