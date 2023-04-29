function computerPlay() {
    var gameArray = ['Rock', 'Paper', 'Scissors'];
    var randomIndex = Math.floor(Math.random() * gameArray.length);
    var randomElement = gameArray[randomIndex];
    return randomElement;
}

let wins = 0;
let ties = 0;
let losses = 0;
let playerSelection = "";
let computerSelection = "";
let result = "";
let counter = 0;

function setPlayerSelection(selection) {
    playerSelection = selection.toUpperCase();
    playRound(playerSelection, computerPlay());
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    counter++;
    console.log(counter);

    while (counter < 5) {
        let option = computerPlay();
        computerSelection = option.toUpperCase();

        switch (playerSelection) {
            case "ROCK":
                if (computerSelection == "ROCK") {
                    ties++;
                    return document.getElementById("result").innerHTML = "It's a tie!";
                }
                else if (computerSelection == "PAPER") {
                    losses++;
                    return document.getElementById("result").innerHTML = "You Lose! Paper beats Rock!";
                }
                else if (computerSelection == "SCISSORS") {
                    wins++;
                    return document.getElementById("result").innerHTML = "You Win! Rock beats Scissors!";
                }
            case "PAPER":
                if (computerSelection == "PAPER") {
                    ties++;
                    return document.getElementById("result").innerHTML = "It's a tie!";
                }
                else if (computerSelection == "SCISSORS") {
                    losses++;
                    return document.getElementById("result").innerHTML = "You Lose! Scissors beats Paper!";
                }
                else if (computerSelection == "ROCK") {
                    wins++;
                    return document.getElementById("result").innerHTML = "You Win! Paper beats Rock!";
                }
            case "SCISSORS":
                if (computerSelection == "SCISSORS") {
                    ties++;
                    return document.getElementById("result").innerHTML = "It's a tie!";
                }
                else if (computerSelection == "ROCK") {
                    losses++;
                    return document.getElementById("result").innerHTML = "You Lose! Rock beats Scissors!";
                }
                else if (computerSelection == "PAPER") {
                    wins++;
                    return document.getElementById("result").innerHTML = "You Win! Scissors beats Paper!";
                }
        }
    }

    if( counter == 5) {
        document.getElementById("score").innerHTML = "Game over! Scores: \n wins: " + wins + " ties: " + ties + " losses: " + losses;
    }
}