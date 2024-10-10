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

function getHumanChoice() {
    while (true) {
        let choice = prompt("Let's play rock paper scissors. Go!");
        choice = choice.toLowerCase();

        if (choice != "rock" && choice != "paper" && choice != "scissors") {
            alert("Type in an actual choice please!");
            continue;
        } else {
            return choice;
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice === "rock" && computerChoice === "paper"
            || humanChoice === "scissors" && computerChoice === "rock"
            || humanChoice === "paper" && computerChoice === "scissors"
        ) {
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore += 1;
        } else if (humanChoice === computerChoice) {
            console.log("Tie! You both chose " + humanChoice);
        } else {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore += 1;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (computerScore > humanScore) {
        console.log("You lose! The computer had a total score of " + computerScore + " and you only had " + humanScore);
    } else if (humanScore > computerScore) {
        console.log("You won! You had a total score of " + humanScore + " and the computer only had " + computerScore);
    } else {
        console.log("Tie! You both had a total score of " + humanScore);
    }
}

playGame();



