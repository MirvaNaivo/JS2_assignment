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
let points = 0;

function setPlayerSelection(selection) {
    playerSelection = selection.toUpperCase();
    playRound(playerSelection, computerPlay());
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    console.log(points);

    while (points < 5) {
        let option = computerPlay();
        computerSelection = option.toUpperCase();

        switch (playerSelection) {
            case "ROCK":
                switch (computerSelection) {
                    case "ROCK":
                        ties++;
                        return document.getElementById("result").innerHTML = "It's a tie!";
                    case "PAPER":
                        losses++;
                        return document.getElementById("result").innerHTML = "You Lose! Paper beats Rock!";
                    case "SCISSORS":
                        wins++;
                        points++;
                        return document.getElementById("result").innerHTML = "You Win! Rock beats Scissors!";
                }
            case "PAPER":
                switch (computerSelection) {
                    case "PAPER":
                        ties++;
                        return document.getElementById("result").innerHTML = "It's a tie!";
                    case "SCISSORS":
                        losses++;
                        return document.getElementById("result").innerHTML = "You Lose! Scissors beats Paper!";
                    case "ROCK":
                        wins++;
                        points++;
                        return document.getElementById("result").innerHTML = "You Win! Paper beats Rock!";
                }
            case "SCISSORS":
                switch (computerSelection) {
                    case "SCISSORS":
                        ties++;
                        return document.getElementById("result").innerHTML = "It's a tie!";
                    case "ROCK":
                        losses++;
                        return document.getElementById("result").innerHTML = "You Lose! Rock beats Scissors!";
                    case "PAPER":
                        wins++;
                        points++;
                        return document.getElementById("result").innerHTML = "You Win! Scissors beats Paper!";
                }
        }
    }

    if (points == 5) {
        document.getElementById("score").innerHTML = "Game over! Scores: \n wins: " + wins + " ties: " + ties + " losses: " + losses;

        if (wins > losses) {
            return document.getElementById("winner").innerHTML = "Congratulations, You are the Winner!";
        }
        else if (losses > wins) {
            return document.getElementById("winner").innerHTML = "Oh no, You Lost.."
        }
        else {
            return document.getElementById("winner").innerHTML = "It seems to be a tie"
        }
    }
}