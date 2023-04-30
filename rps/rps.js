let points = 0;
let wins = 0;
let losses = 0;

function playRound(playerChoice) {
    while (points < 5) {
        if ((playerChoice === 'rock' && computerPlay() === 'scissors') ||
            (playerChoice === 'paper' && computerPlay() === 'rock') ||
            (playerChoice === 'scissors' && computerPlay() === 'paper')) {
            points++;
            wins++;
            return document.getElementById("result").innerHTML = "You won!";
        }
        else {
            losses++
            return document.getElementById("result").innerHTML = "You lost..";
        }
    } 
    checkWinner(wins, losses);
}

function computerPlay() {
    var choices = ['rock', 'paper', 'scissors'];
    return randomElement = choices[Math.floor(Math.random() * 3)];
}

function checkWinner(wins, losses) {
    if(wins > losses) {
        return document.getElementById("winner").innerHTML = "You're the winner!";
    }
    else {
        return document.getElementById("winner").innerHTML = "Oh no, you lost..";
    }
}