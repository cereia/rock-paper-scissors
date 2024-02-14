//create a function to determine the computer's choice
//create a function that compare's the computer and player's choices
//create a function that determines the overall winner after 5 rounds

//create a function to determine the computer's random choice of rock, paper, or scissors
//create a function that takes the player's choice and the computer's choice
    //2 inputs: player's choice and computers choice 
    //function should compare the 2 inputs and give either a win or lose message
//change player's input to case insensitive
//create a function that uses the previous function to
  //keep track of the rounds played for 5 total rounds
  //returns a winner or loser after 5 rounds

//rock > scissors
//scissors > paper
//paper > rock

let computerSelection;
let playerSelection = prompt('Rock, paper, or scissors?') || 'rock';

function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors'];
  let random = Math.floor(Math.random() * 3);
  return computerSelection = options[random];
}

//values from above are not being passed in correcly
function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();

  let message;
  if (player == 'rock' && computerSelection == 'scissors') {
    return message = `You Win! ${player[0].toUpperCase() + player.slice(1)} beats ${computerSelection}!`
  } else if (player == 'scissors' && computerSelection == 'paper') {
    return message = `You Win! ${player[0].toUpperCase() + player.slice(1)} beats ${computerSelection}!`
  } else if(player == 'paper' && computerSelection == 'rock') {
    return message = `You Win! ${player[0].toUpperCase() + player.slice(1)} beats ${computerSelection}!`
  } else if (player == computerSelection) {
    return message = `You both chose ${player} and Tied! No one wins!`
  } else {
    return message = `You Lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${player}!`
  }
}

getComputerChoice();
