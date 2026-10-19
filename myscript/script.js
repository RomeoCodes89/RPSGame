// test the script connectivity to the html doc
console.log("Hello, World!");

// function to get the computer's choice
function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

console.log(getComputerChoice());

// function to get the human's choice
function getHumanChoice () {
    const humanChoice = prompt("Enter rock, paper, or scissors:");
    return humanChoice.toLowerCase();
}

console.log(getHumanChoice());

// function to determine the winner
function getGameWinner (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {

        return alert("You chose " + humanChoice + "and the computer chose " + computerChoice + "So. It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        alert("You chose " + humanChoice + " and the computer chose " + computerChoice + ". You win!");
        return "human";
    } else {
        alert("You chose " + humanChoice + " and the computer chose " + computerChoice + ". Computer wins!");
        return "computer";
    }
}

console.log(getGameWinner("rock", "scissors"));

// function to play each round
function playRound () {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    return getGameWinner(humanChoice, computerChoice);
}

//function for playing the game
function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    console.log("Let the 5 round Game begin!");
    
    // Loops to play 5 rounds of the game
    for (let i = 1; i < 5; i++) {
        console.log(`Round ${i}`);

        const roundWinner = playRound();

        // Score update after each round played

        if (roundWinner === "human") {
            humanScore++;
        } else if (roundWinner === "computer") {
            computerScore++;
        }
    }
    
     // Scoreboard after each round played
    console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);

    // Determine the overall winner for the 5 rounds.
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer won the game!");
    } else {
        console.log("It's a tie game!");
    }
}

// Execution: Start the game
playGame();