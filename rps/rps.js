function computerPlay() {
    var gameArray = ['Rock', 'Paper', 'Scissors'];
    var randomIndex = Math.floor(Math.random()*gameArray.length);
    var randomElement = gameArray[randomIndex];
    return randomElement;
}

console.log(computerPlay());

let wins = 0;
let ties = 0;
let losses = 0;

let paper = document.createElement('button');
let rock = document.createElement('button');
let scissors = document.createElement('button');
let container = document.createElement('div');

paper.style.cssText = 'background: red; color: white; padding: 15px 32px;';
rock.style.cssText = 'background: blue; color: white; padding: 15px 32px;';
scissors.style.cssText = 'background: green; color: white; padding: 15px 32px;';

rock.innerHTML = "Rock";
paper.innerHTML = "Paper";
scissors.innerHTML = "Scissors";

rock.onclick = 

document.body.appendChild(container);

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

function gamePlay(playerSelection, computerSelection) {
    let answer = "";
    switch(answer) {
        case rock: 
        answer = "ROCK";
        case paper: 
        answer = "PAPER";
        case scissors: 
        answer = "SCISSORS";
    }
    
    playerSelection = answer;
    let option = computerPlay();
    computerSelection = option.toUpperCase();

    switch(playerSelection) {
        case "ROCK": 
        if(computerSelection == "ROCK") {
            ties++;
            return "It's a tie!";
        }
        else if(computerSelection == "PAPER") {
            losses++;
            return "You Lose! Paper beats Rock!";
        }
        else if(computerSelection == "SCISSORS") {
            wins++;
            return "You Win! Rock beats Scissors!";
        }
        case "PAPER": 
        if(computerSelection == "PAPER") {
            ties++;
            return "It's a tie!";
        }
        else if(computerSelection == "SCISSORS") {
            losses++;
            return "You Lose! Scissors beats Paper!";
        }
        else if(computerSelection == "ROCK") {
            wins++;
            return "You Win! Paper beats Rock!";
        }
        case "SCISSORS": 
        if(computerSelection == "SCISSORS") {
            ties++;
            return "It's a tie!";
        }
        else if(computerSelection == "ROCK") {
            losses++;
            return "You Lose! Rock beats Scissors!";
        }
        else if(computerSelection == "PAPER") {
            wins++;
            return "You Win! Scissors beats Paper!";
        }
    }
}

console.log(gamePlay());

function playRound() {

    let counter = 0;

    while (counter < 5) {
        gamePlay();
        counter++;
    }

    if (counter === 5) {
        return "Game over! Scores: \n wins: " + wins + " ties: " + ties + " losses: " + losses;
    }
}


console.log(playRound());


