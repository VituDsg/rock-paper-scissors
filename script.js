let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
const winRound = document.querySelector("#winRound");
const winMessage = document.querySelector("#winMessage");
const scoreMessage = document.querySelector("#scoreMessage");

scoreMessage.style.fontSize = "20px";
scoreMessage.style.marginBottom = "25px";

winMessage.style.fontSize = "25px";
winMessage.style.fontWeight = "bold";
winMessage.style.marginBottom = "25px";

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


function playGame(humanChoice, computerChoice) {
    
    if (humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "rock" && computerChoice === "scissors"
    ) {
        humanScore++;
        console.log("You win this round! " +humanChoice+ " BEATS " +computerChoice)
        winRound.textContent = "You win this round! " +humanChoice+ " BEATS " +computerChoice;
        scoreMessage.textContent = "Your score: " +humanScore+ " Computer score: " +computerScore;
    }else {
        computerScore++;
        console.log("You lose this round! " +computerChoice+ " BEATS " + humanChoice )
        winRound.textContent = "You lose this round! " +computerChoice+ " BEATS " + humanChoice;
        scoreMessage.textContent = "Your score: " +humanScore+ " Computer score: " +computerScore;
    }

        if (humanScore === 5) {
            winMessage.textContent = "Congratulations! You won the game!";
            humanScore = 0;
            computerScore = 0;
        }else if (computerScore === 5) {
            winMessage.textContent = "Sorry! You lost the game!";
            humanScore = 0;
            computerScore = 0;
        }
}

btnRock.addEventListener("click", () => {
    humanChoice = "rock";
    playGame(humanChoice, getComputerChoice())
});

btnPaper.addEventListener("click", () => {
    humanChoice = "paper";
    playGame(humanChoice   , getComputerChoice());
});

btnScissors.addEventListener("click", () => {
    humanChoice = "scissors";
    playGame(humanChoice, getComputerChoice());
});



console.log(humanScore)
console.log(computerScore)