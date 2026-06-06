"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".number").textContent = 17;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1; //Math.trunc(Math.random()*20) -> 0 to 19 , so add +1 , no decimals
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No Number!";
    displayMessage("No Number!");

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "too high" : "too low");
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "too high" : "too low";
      score = score - 1; //score--
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Game Over!");
      document.querySelector(".score").textContent = 0;
    }
  }
  //     // when there is no is too high
  //     } else if (guess > secretNumber) {
  //       if (score > 1) {
  //         document.querySelector(".message").textContent = "too high";
  //         score = score - 1; //score--
  //         document.querySelector(".score").textContent = score;
  //       } else {
  //         document.querySelector(".message").textContent = "Game Over!";
  //         document.querySelector(".score").textContent = 0;
  //       }

  //     // when there is no too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "too low";
  //       score = score - 1; //score--
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "Game Over!";
  //       document.querySelector("body").style.backgroundColor = "red";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
