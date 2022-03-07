let roundResultSimplified;
let roundResult;
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
    let lowerPlayerSelection = playerSelection.toLowerCase();
    let capitalSelection = lowerPlayerSelection[0].toUpperCase();
    let capitalPlayerSelection = capitalSelection.concat(lowerPlayerSelection.slice(1));
    if (lowerPlayerSelection === "rock" && computerSelection === "Scissors" || 
    lowerPlayerSelection === "paper" && computerSelection === "Rock" ||
    lowerPlayerSelection === "scissors" && computerSelection === "Paper") {
        roundResultSimplified = 1;
        roundResult = `You win! ${capitalPlayerSelection} beats ${computerSelection}!`;
    }
    else if (lowerPlayerSelection === "rock" && computerSelection === "Paper" ||
    lowerPlayerSelection === "paper" && computerSelection === "Scissors" || 
    lowerPlayerSelection === "scissors" && computerSelection === "Rock" ) {
        roundResultSimplified = 2;
        roundResult = `You lose. ${capitalPlayerSelection} gets beaten by ${computerSelection}.`;
    } 
    else {
        roundResultSimplified = 3;
        roundResult = `Draw. You both chose ${capitalPlayerSelection}`;
    }
    return roundResult;
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let finalScore;
    let playerName;
    playerName = prompt("Name", "");
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock | Paper | Scissors", "");
        playRound(playerSelection, computerPlay());
        if (roundResultSimplified === 1) {
            ++playerScore;
        }
        else if (roundResultSimplified === 2) {
            ++computerScore;
        }
        else {
            playerScore += 0;
            computerScore += 0;
        }
        console.log(roundResult);
    }
    if (playerScore > computerScore) {
        finalScore = `You win! Final Score: ${playerName} | ${playerScore} - Computer | ${computerScore}`;
    }
    else if (playerScore < computerScore) {
        finalScore = `You lose. Final Score: ${playerName} | ${playerScore} - Computer | ${computerScore}`;
    }
    else {
        finalScore = `Draw. Final Score: ${playerName} | ${playerScore} - Computer | ${computerScore}`;
    }
    console.log(finalScore);
}