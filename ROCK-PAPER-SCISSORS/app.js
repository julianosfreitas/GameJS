const computerChoiceDisplay = document.getElementById('computerChoice')
const userChoiceDisplay = document.getElementById('userChoice')
const resultDisplay = document.getElementById('result')
const possibleChoises = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoises.forEach(possibleChoise => possibleChoise.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}));


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoises.length) + 1;

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You Lost!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You Win!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lost!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You Win!'
    }
    if (computerChoice === 'scissor' && userChoice === 'paper') {
        result = 'You Lost!'
    }

    resultDisplay.innerHTML = result
}