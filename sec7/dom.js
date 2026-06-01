"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".number").textContent = 17;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

const Secretnumber = Math.trunc(Math.random() * 20) + 1; //Math.trunc(Math.random()*20) -> 0 to 19 , so add +1 , no decimals
let score = 20;
document.querySelector(".number").textContent = Secretnumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  } else if (guess === Secretnumber) {
    document.querySelector(".message").textContent = "Correct Number!";
  } else if (guess > Secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high";
      score = score - 1; //score--
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < Secretnumber) {
    if (score > 1) {
      document.querySelector(".score").textContent = "too low";
      score = score - 1; //score--
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
