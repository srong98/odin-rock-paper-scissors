const startButton = document.getElementById("start-button");
const gameContainer = document.getElementById("gamecontainer");
const playerChoiceDiv = document.getElementById("player-selection");
const computerChoiceDiv = document.getElementById("computer-selection");
const scoreboard = document.getElementById("scoreboard");
const playerRock = document.getElementById("player-rock");
const playerPaper = document.getElementById("player-paper");
const playerScissors = document.getElementById("player-scissors");
const computerRock = document.getElementById("computer-rock");
const computerPaper = document.getElementById("computer-paper");
const computerScissors = document.getElementById("computer-scissors");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerMessage = document.getElementById("player-choice-message")
const computerMessage = document.getElementById("computer-choice-message")
const overallResult = document.getElementById("overall-result");
playerRock.addEventListener('click', () => playRound("Rock", computerPlay()));
playerPaper.addEventListener('click', () => playRound("Paper", computerPlay())); 
playerScissors.addEventListener('click', () => playRound ("Scissors", computerPlay()));
startButton.addEventListener('click', startButtonInput);
let pScore = 0;
let cScore = 0;
function computerPlay() {
    let computerSelection;
    let x = Math.random() * 10;
    if (x < 10/3) {
        computerSelection = "Rock";
    }
    else if (x < 20/3) {
        computerSelection = "Paper";
    }
    else {
        computerSelection = "Scissors";
    }
    return computerSelection;
}
function playRound(playerSelection, computerSelection) {
    setChoiceBackground(playerSelection, computerSelection);
    if (playerSelection === "Rock" && computerSelection === "Scissors" || 
            playerSelection === "Paper" && computerSelection === "Rock" ||
            playerSelection === "Scissors" && computerSelection === "Paper") {
                pScore += 1;
                playerScore.textContent = `${pScore}`;
                playerScore.style.color = "green";
                computerScore.style.color = "red";
            }
    else if (playerSelection === "Rock" && computerSelection === "Paper" ||
            playerSelection === "Paper" && computerSelection === "Scissors" || 
            playerSelection === "Scissors" && computerSelection === "Rock" ) {
                cScore += 1;
                computerScore.textContent = `${cScore}`;
                computerScore.style.color = "green";
                playerScore.style.color = "red";
            } 
    else {
        playerScore.style.color = "white";
        computerScore.style.color = "white";
    }
    playerMessage.textContent = `${playerSelection}`;
    computerMessage.textContent = `${computerSelection}`;
    if (pScore >= 5) {
        overallResult.textContent = "You Win!";
        overallResult.setAttribute("style", "display: inline;");
        startButton.textContent = "Play Again?";
        gameEnd();
    }
    else if (cScore >=5) {
        overallResult.textContent = "Computer Wins.";
        overallResult.setAttribute("style", "display: inline;");
        startButton.textContent = "Try Again?";
        gameEnd()
    }
    else {
        playerMessage.textContent = `${playerSelection}`;
        computerMessage.textContent = `${computerSelection}`;
    }
}
function startButtonInput() {
    startButton.setAttribute("style", "display: none");
    playerChoiceDiv.classList.toggle("fadein");
    computerChoiceDiv.classList.toggle("fadein");
    scoreboard.classList.toggle("fadein");
    playerScore.textContent = "0";
    computerScore.textContent = "0"
    overallResult.setAttribute("style", "display: none");
}
function setChoiceBackground(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        playerRock.style.backgroundColor = "dodgerblue";
        playerPaper.style.backgroundColor = "white";
        playerScissors.style.backgroundColor = "white";
    }
    else if (playerSelection === "Paper") {
        playerPaper.style.backgroundColor = "dodgerblue";
        playerRock.style.backgroundColor = "white";
        playerScissors.style.backgroundColor = "white";
    }
    else {
        playerScissors.style.backgroundColor = "dodgerblue";
        playerPaper.style.backgroundColor = "white";
        playerRock.style.backgroundColor = "white";
    }
    if (computerSelection === "Rock") {
        computerRock.style.backgroundColor = "salmon";
        computerPaper.style.backgroundColor = "white";
        computerScissors.style.backgroundColor = "white";
    }
    else if (computerSelection === "Paper") {
        computerPaper.style.backgroundColor = "salmon";
        computerRock.style.backgroundColor = "white";
        computerScissors.style.backgroundColor = "white";
    }
    else {
        computerScissors.style.backgroundColor = "salmon";
        computerPaper.style.backgroundColor = "white";
        computerRock.style.backgroundColor = "white";
    }
}
function gameEnd() {
    playerChoiceDiv.classList.toggle("fadein");
    computerChoiceDiv.classList.toggle("fadein");
    scoreboard.classList.toggle("fadein");
    startButton.setAttribute("style", "display: block; margin-top: 100px; font-size: 40px");
    computerScissors.style.backgroundColor = "white";
    computerPaper.style.backgroundColor = "white";
    computerRock.style.backgroundColor = "white"
    playerScissors.style.backgroundColor = "white";
    playerPaper.style.backgroundColor = "white";
    playerRock.style.backgroundColor = "white";
    playerMessage.textContent = `nothing yet`;
    computerMessage.textContent = `nothing yet`;
    computerScore.style.color = "white";
    playerScore.style.color = "white";
    pScore = 0;
    cScore = 0;
}