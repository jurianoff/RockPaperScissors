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
function singleRound (playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case 'rock':
            console.log(`Computer choose ${computerSelection}`);
            if (computerSelection === 'rock') {
                return "It's a tie!";
            } else if (computerSelection === 'paper') {
                return 'You lose! Paper beats rock!';
            } else {
                return 'You win! Rock beats scissors!';
            }
            break;
        case 'paper':
            console.log(`Computer choose ${computerSelection}`);
            if (computerSelection === 'rock') {
                return "You win! Paper beats rock!";
            } else if (computerSelection === 'paper') {
                return "It's a tie!";
            } else {
                return 'You lose! Scissors beats paper!';
            }
            break;
        case 'scissors':
            console.log(`Computer choose ${computerSelection}`);
            if (computerSelection === 'rock') {
                return "You lose! Rock beats scissors";
            } else if (computerSelection === 'paper') {
                return "You win! Scissors beats paper!";
            } else {
                return "It's a tie!";
            }
            break;
    }
}
