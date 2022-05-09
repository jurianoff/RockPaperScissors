function computerPlay () {
    option = Math.floor(Math.random() * 3);
    if (option === 0) {
        return 'rock';
    } else if (option === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let playerScore = 0;
let computerScore = 0;

function singleRound (playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case 'rock':
            console.log(`Computer choose ${computerSelection}`);
            if (computerSelection === 'rock') {
                return "It's a tie!";
            } else if (computerSelection === 'paper') {
                computerScore++;
                return 'You lose! Paper beats rock!';
            } else {
                playerScore++;
                return 'You win! Rock beats scissors!';
            }
            break;
        case 'paper':
            console.log(`Computer choose ${computerSelection}`);
            if (computerSelection === 'rock') {
                playerScore++;
                return "You win! Paper beats rock!";
                
            } else if (computerSelection === 'paper') {
                return "It's a tie!";
            } else {
                computerScore++;
                return 'You lose! Scissors beats paper!';
            }
            break;
        case 'scissors':
            console.log(`Computer choose ${computerSelection}`);
            if (computerSelection === 'rock') {
                computerScore++;
                return "You lose! Rock beats scissors";
            } else if (computerSelection === 'paper') {
                playerScore++;
                return "You win! Scissors beats paper!";
            } else {
                return "It's a tie!";
            }
            break;
        default:
            console.log('Wrong player input!');
            break;
    }
}

function game () {
    
    for (let i = 0; i < 5; i++) {
        let playerInput = prompt('Choose your weapon');
        console.log(singleRound(playerInput, computerPlay()));
        console.log(`Player ${playerScore} : ${computerScore} Computer`);
        let gameNumber = i + 1;
        console.log(`Game number ${gameNumber}`);
    }
}

game();