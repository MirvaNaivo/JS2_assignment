let points = 0;
let computer = 0;
let wins = 0;
let losses = 0;

window.onload = function() {
    let buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
        button.addEventListener("click", function() {
            playRound(button.id);
        });
    });
}

function playRound(playerChoice) {
    let computerChoice = computerPlay();

    if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
        points++;
        wins++;
        document.getElementById("result").textContent = "You won!";
        countScore(points, computer);
    }
    else if (playerChoice === computerChoice) {
        document.getElementById("result").textContent = "It's a tie!";
    }
    else {
        losses++;
        computer++;
        document.getElementById("result").textContent = "You lost..";
        countScore(points, computer);
    }

    if (points === 5) {
        checkWinner(wins, losses);
        document.getElementById("again").style.visibility = "visible";
        let again = document.getElementById("reset");
        again.addEventListener("click", reset);
    }
}

function computerPlay() {
    var choices = ['rock', 'paper', 'scissors'];
    return randomElement = choices[Math.floor(Math.random() * 3)];
}

function checkWinner(wins, losses) {
    if (wins > losses) {
        document.getElementById("winner").textContent = "You're the winner!";
    }
    else {
        document.getElementById("winner").textContent = "Oh no, you lost..";
    }
}

function countScore(points, computer) {    
    if(points > 0) {
        document.getElementById("player").textContent = points;
    }
    if(computer > 0) {
        document.getElementById("computer").textContent = computer;
    }
}

function reset() {
    document.getElementById("player").textContent = 0;
    document.getElementById("computer").textContent = 0;
    points = 0; 
    wins = 0;
    losses = 0;
    computer = 0;
    document.getElementById("again").style.visibility = "hidden";
}