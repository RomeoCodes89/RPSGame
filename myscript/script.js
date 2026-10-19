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

//console.log(getHumanChoice());
