"use strict";

//game info
let gameInfo = document.getElementById("game-info");

//scores
let userScore = 0;
let compScore = 0;
let userDisplayScore = document.getElementById("user-score");
let compDisplayScore = document.getElementById("computer-score");

//Display values
let userValue = document.getElementById("user-input");
let compValue = document.getElementById("computer-input");

//Buttons
let rockBtn = document.getElementById("rock-btn");
let paperBtn = document.getElementById("paper-btn");
let scisBtn = document.getElementById("scissors-btn");

let compFinalValue;
let userFinalValue = "";

// User inputs value
const userChoiceRock = () => {
  userFinalValue = "rock";
  compChoice();
  compareChoices(userFinalValue, compFinalValue);
};

const userChoicePaper = () => {
  userFinalValue = "paper";
  compChoice();
  compareChoices(userFinalValue, compFinalValue);
};

const userChoiceScissors = () => {
  userFinalValue = "scissors";
  compChoice();
  compareChoices(userFinalValue, compFinalValue);
};

const compChoice = () => {
  // roll a random number between 1-3
  let compValue = Math.floor(Math.random() * 3);

  if (compValue === 0) {
    compFinalValue = "rock";
    return compFinalValue;
  } else if (compValue === 1) {
    compFinalValue = "paper";
    return compFinalValue;
  } else {
    compFinalValue = "scissors";
    return compFinalValue;
  }
};

const compareChoices = (user, comp) => {
  //TIE
  if (user === "rock" && comp === "rock") {
    gameInfo.innerText = `User chose ${user} and computer chose ${comp} TIE`;
    userValue.innerText = "🧱";
    compValue.innerText = "🧱";
  } else if (user === "paper" && comp === "paper") {
    gameInfo.innerText = `User chose ${user} and computer chose ${comp} TIE`;
    userValue.innerText = "📝";
    compValue.innerText = "📝";
  } else if (user === "scissors" && comp === "scissors") {
    gameInfo.innerText = `User chose ${user} and computer chose ${comp} TIE`;
    userValue.innerText = "✂️";
    compValue.innerText = "✂️";
  }
  //ROCK
  else if (user === "rock" && comp === "scissors") {
    gameInfo.innerText = `User chose ${user} and computer chose ${comp} YOU WIN`;
    userValue.innerText = "🧱";
    compValue.innerText = "✂️";
    userScore += 1;
    userDisplayScore.innerText = userScore;
  } else if (user === "scissors" && comp === "rock") {
    gameInfo.innerText = `User chose ${user} and computer chose ${comp} YOU LOOSE`;
    userValue.innerText = "✂️";
    compValue.innerText = "🧱";
    compScore += 1;
    compDisplayScore.innerText = compScore;
  }
  //PAPER
  else if (user === "paper" && comp === "rock") {
    gameInfo.innerText = `User chose ${user} and computer chose ${comp} YOU WIN`;
    userValue.innerText = "📝";
    compValue.innerText = "🧱";
    userScore += 1;
    userDisplayScore.innerText = userScore;
  } else if (user === "rock" && comp === "paper") {
    gameInfo.innerText = `User chose ${user} and computer chose ${comp} YOU LOOSE`;
    userValue.innerText = "🧱";
    compValue.innerText = "📝";
    compScore += 1;
    compDisplayScore.innerText = compScore;
  }
  //SCISSORS
  else if (user === "scissors" && comp === "paper") {
    gameInfo.innerText = `User chose ${user} and computer chose ${comp} YOU WIN`;
    userValue.innerText = "✂️";
    compValue.innerText = "📝";
    userScore += 1;
    userDisplayScore.innerText = userScore;
  } else if (user === "paper" && comp === "scissors") {
    gameInfo.innerText = `User chose ${user} and computer chose ${comp} YOU LOOSE`;
    userValue.innerText = "📝";
    compValue.innerText = "✂️";
    compScore += 1;
    compDisplayScore.innerText = compScore;
  }
};
