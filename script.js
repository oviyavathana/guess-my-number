let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(".secret-number").textContent = "?";
document.querySelector(".score").textContent = score;
document.querySelector(".highscore").textContent = highScore;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
document.querySelector(".btn-check").addEventListener("click", function () {
  let guess = document.querySelector(".input-value").value;

  if (!guess) {
    displayMessage("Please Enter a Number");
  } else if (guess == secretNumber) {
    displayMessage("Your Guess is correct 🎉");
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage("Your Guess is High🫣");
      score--;
      displayScore(score);
    } else {
      displayMessage("You Lost the Game 😕");
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage("Your Guess is Low😐");
      score--;
      displayScore(score);
    } else {
      displayMessage("You Lost the Game 😕");
    }
  }
});

document.querySelector(".btn-again").addEventListener("click", function () {
  let score = 20;
  let highScore = 0;
  displayScore(score);
  document.querySelector(".highscore").textContent = highScore;
  document.querySelector(".input-value").value = "";
  displayMessage("Start guessing 😊");
  document.querySelector(".secret-number").textContent = "?";
});
