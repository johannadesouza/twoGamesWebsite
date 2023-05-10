// Guess the Number game
const guessButton = document.getElementById("guess-button");
const guessResult = document.getElementById("guess-result");

guessButton.addEventListener("click", function() {
  const guess = parseInt(document.getElementById("guess").value);
  const randomNumber = Math.floor(Math.random() * 25) + 1;

  if (isNaN(guess) || guess < 1 || guess > 100) {
    guessResult.innerText = "Please enter a valid number between 1 and 25.";
  } else if (guess === randomNumber) {
    guessResult.innerText = "Congratulations! You guessed the number!";
  } else if (guess < randomNumber) {
    guessResult.innerText = "Too low. Try again.";
  } else if (guess > randomNumber) {
    guessResult.innerText = "Too high. Try again.";
  }
});
