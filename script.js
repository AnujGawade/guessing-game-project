let input = document.querySelector(".input");
let wrng = document.querySelector(".wrng");
let guesses = document.querySelector(".guesses");
let btn = document.querySelector(".btn");

let answer = Math.floor(Math.random() * 100) + 1;

let numGuesses = 0;
btn.addEventListener("click", () => {
  guessNumber();
});

function guessNumber() {
  if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
    wrng.innerHTML = "Enter Number Between 1 to 100";
  } else {
    numGuesses++;
    guesses.innerHTML = "Number Of Guess : " + numGuesses;
  }
  if (input.value > answer) {
    wrng.innerHTML = "You Guessed Too High!";
    input.value = "";
  } else if (input.value < answer) {
    wrng.innerHTML = "You Guessed Too Low!";
    input.value = "";
  } else {
    wrng.innerHTML = "Congratulations! You Guessed Correct Number";
    setTimeout(() => {
      resetGame();
    }, 5000);
  }
}

function resetGame() {
  answer = Math.floor(Math.random() * 100) + 1;
  input.value = "";
  guesses.innerHTML = "Number Of Guess : 0";
  wrng.innerHTML = "";
}
