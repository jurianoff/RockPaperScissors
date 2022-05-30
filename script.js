const results = document.querySelector('.results');
const score = document.createElement('div');
const winner = document.createElement('div');
results.appendChild(score);

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resetButton = document.createElement('button');
resetButton.textContent = 'RESET';

const selectionPreviev = document.createElement('div');
results.appendChild(selectionPreviev);

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
            if (computerSelection === 'rock') {
                selectionPreviev.textContent = `Computer choose ${computerSelection}.\nIt\'s a tie!`;
            } else if (computerSelection === 'paper') {
                computerScore++;
                selectionPreviev.textContent = `Computer choose ${computerSelection}.\nYou lose! Paper beats rock!`;
            } else {
                playerScore++;
                selectionPreviev.textContent = `Computer choose ${computerSelection}.\nYou win! Rock beats scissors!`;
            }
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                playerScore++;
                selectionPreviev.textContent = `Computer choose ${computerSelection}.\nYou win! Paper beats rock!`;         
            } else if (computerSelection === 'paper') {
                selectionPreviev.textContent = `Computer choose ${computerSelection}.\nIt\'s a tie!`;
            } else {
                computerScore++;
                selectionPreviev.textContent = `Computer choose ${computerSelection}.\nYou lose! Scissors beats paper!`;
            }
            break;
        case 'scissors':
            if (computerSelection === 'rock') {
                computerScore++;
                selectionPreviev.textContent = `Computer choose ${computerSelection}.\nYou lose! Rock beats scissors`;
            } else if (computerSelection === 'paper') {
                playerScore++;
                selectionPreviev.textContent = `Computer choose ${computerSelection}.\nYou win! Scissors beats paper!`;
            } else {
                selectionPreviev.textContent = `Computer choose ${computerSelection}.\nIt\'s a tie!`;
            }
            break;
        default:
            console.log('Wrong player input!');
            break;
    }
}





resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    score.textContent = `Player ${playerScore} : ${computerScore} Computer`;
    rockButton.addEventListener('click', chooseRock);
    paperButton.addEventListener('click', choosePaper);
    scissorsButton.addEventListener('click', chooseScissors);
    results.removeChild(winner);
    results.removeChild(resetButton);
    selectionPreviev.textContent = '';
})

function scoreAndWinner () {
    score.textContent = `Player ${playerScore} : ${computerScore} Computer`;
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            winner.textContent = 'Player WINS!';
        } else if (computerScore === 5) {
            winner.textContent = 'Computer WINS!';
        }
        results.appendChild(winner);
        rockButton.removeEventListener('click', chooseRock);
        paperButton.removeEventListener('click', choosePaper);
        scissorsButton.removeEventListener('click', chooseScissors);
        results.appendChild(resetButton);
    }
}

function chooseRock () {
    singleRound('rock', computerPlay());
    scoreAndWinner();
}

function choosePaper () {
    singleRound('paper', computerPlay())
    scoreAndWinner();
}

function chooseScissors () {
    singleRound('scissors', computerPlay())
    scoreAndWinner();
}
rockButton.addEventListener('click', chooseRock);
paperButton.addEventListener('click', choosePaper);
scissorsButton.addEventListener('click', chooseScissors);




