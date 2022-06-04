let computerSelection;
let computerPlay;
let playerSelection;
let playerPlay;
let game;

function aleatorio(min, max) {
    return Math.random() * (max - min) + min;
}

computerSelection = Math.floor(aleatorio(1, 4));

if (computerSelection == 1) {
    computerPlay = 'Rock';
}
if (computerSelection == 2) {
    computerPlay = 'Paper';
}
if (computerSelection == 3) {
    computerPlay = 'Scissor';
}

playerSelection = parseInt(prompt('Please select an option \n 1. Rock \n 2. Paper \n 3. Scissor'));

if (playerSelection == 1) {
    playerPlay = 'Rock';
}
if (playerSelection == 2) {
    playerPlay = 'Paper';
}
if (playerSelection == 3) {
    playerPlay = 'Scissor';
}

console.log('Computer selection: ' + computerPlay);
console.log('And you: ' + playerPlay);

if (computerPlay == 'Rock' && playerPlay == 'Rock') {
    game = 'Tie';
}
if (computerPlay == 'Rock' && playerPlay == 'Paper') {
    game = 'You win! Paper beats Rock';
}
if (computerPlay == 'Rock' && playerPlay == 'Scissor') {
    game = 'You lose! Rock beats Scissor';
}
if (computerPlay == 'Paper' && playerPlay == 'Paper') {
    game = 'Tie';
}
if (computerPlay == 'Paper' && playerPlay == 'Rock') {
    game = 'You lose! Paper beats Rock';
}
if (computerPlay == 'Paper' && playerPlay == 'Scissor') {
    game = 'You win! Scissor beats Paper';
}
if (computerPlay == 'Scissor' && playerPlay == 'Scissor') {
    game = 'Tie';
}
if (computerPlay == 'Scissor' && playerPlay == 'Rock') {
    game = 'You win! Rock beats Scissor';
}
if (computerPlay == 'Scissor' && playerPlay == 'Paper') {
    game = 'You lose! Scissor beats Paper';
}

console.log(game);