// Rock Paper Scissors game
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const rpsResult = document.getElementById("rps-result");

rockButton.addEventListener("click", function() {
  playRPS("rock");
});

paperButton.addEventListener("click", function() {
  playRPS("paper");
});

scissorsButton.addEventListener("click", function() {
  playRPS("scissors");
});

function playRPS(playerSelection) {
  const weapons = ["rock", "paper", "scissors"];
  const computerSelection = weapons[Math.floor(Math.random() * weapons.length)];

  if (playerSelection === computerSelection) {
    rpsResult.innerText = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    rpsResult.innerText = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    rpsResult.innerText = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

