let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let drawnNumber = Math.floor(Math.random() * 3) + 1;

    if (drawnNumber === 1) {
        return "rock";

    }
    else if (drawnNumber === 2) {
        return "paper"

    }else {
        return "scissors"
    }

}

function getHumanChoice() {
    let choice = prompt("Please, enter rock, paper, or scissors. ")

    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "rock" && computerChoice === "scissors"
    ) {
        humanScore++;
        console.log("You win this round! " +humanChoice+ " BEATS " +computerChoice)
    }else {
        computerScore++;
        console.log("You lose this round! " +computerChoice+ " BEATS " + humanChoice )
    }

}

function playGame() {

    for(let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore) {
        return console.log("You win this match! you have " +humanScore+ " points")

    }
    else if(computerScore > humanScore) {
        return console.log("You lose this match! computer have " +computerScore+ " points")
    }
    else {
        return console.log("This is a DRAW match!")
    }
    
}

playGame();

console.log(humanScore)
console.log(computerScore)