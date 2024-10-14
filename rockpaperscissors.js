function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = getRandomInt(3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

let amount = 0;
let humanScore = 0;
let computerScore = 0;

function playGame(humanChoice, computerChoice) {


    const resultsDiv = document.querySelector(".resultsDiv");
    const gameResult = document.createElement("p");


    const visibleHumanScore = document.querySelector("#humanScore");
    const visibleComputerScore = document.querySelector("#computerScore");

    function playRound() {

        if (amount == 0) {
            resultsDiv.replaceChildren("");

            humanScore = 0;
            computerScore = 0;

            visibleHumanScore.textContent = "Human: " + humanScore;
            visibleComputerScore.textContent = "Computer: " + computerScore;
        }

        amount++;
        if (humanChoice === "rock" && computerChoice === "paper"
            || humanChoice === "scissors" && computerChoice === "rock"
            || humanChoice === "paper" && computerChoice === "scissors"
        ) {
            computerScore += 1;

            visibleComputerScore.textContent = "Computer: " + computerScore;

            gameResult.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
            resultsDiv.append(gameResult);

        } else if (humanChoice === computerChoice) {

            gameResult.textContent = "Tie! You both chose " + humanChoice;
            resultsDiv.append(gameResult);

        } else {

            humanScore += 1;

            visibleHumanScore.textContent = "Human: " + humanScore;

            gameResult.textContent = "You win! " + humanChoice + " beats " + computerChoice;
            resultsDiv.append(gameResult);
        }

    }

    playRound();

    if (amount == 5) {

        amount = 0;

        const finalResult = document.createElement("p");

        if (computerScore > humanScore) {
            finalResult.textContent = "You lose! The computer had a total score of " + computerScore + " and you only had " + humanScore;
        } else if (humanScore > computerScore) {
            finalResult.textContent = "You won! You had a total score of " + humanScore + " and the computer only had " + computerScore;
        } else {
            finalResult.textContent = "Tie! You both had a total score of " + humanScore;
        }

        resultsDiv.append(finalResult);

    }


}

const rockChoice = document.querySelector("#rockButton");
const paperChoice = document.querySelector("#paperButton");
const scissorsChoice = document.querySelector("#scissorsButton");

rockChoice.addEventListener("click", getHumanChoice);
paperChoice.addEventListener("click", getHumanChoice);
scissorsChoice.addEventListener("click", getHumanChoice);

function getHumanChoice(event) {
    if (event.target.id === "rockButton") {
        playGame("rock", getComputerChoice());
    } else if (event.target.id === "paperButton") {
        playGame("paper", getComputerChoice());
    } else if (event.target.id === "scissorsButton") {
        playGame("scissors", getComputerChoice());
    }
}



