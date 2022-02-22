"use strict";

//scores
let userScore = document.getElementById("user-score");
let compScore = document.getElementById("computer-score");

//Display values
let userValue = document.getElementById("user-input");
let compValue = document.getElementById("computer-input");

//Buttons
let rockBtn = document.getElementById("rock-btn");
let paperBtn = document.getElementById("paper-btn");
let scisBtn = document.getElementById("scissors-btn");

let compFinalValue;
let userFinalValue = ;

// User inputs value 
const userChoice = () =>{
    
}
// Compare it with computer value
// decide winner

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
  //return either R, P or S
};
compChoice();

const compareChoices = (user, comp) => {
  //TIE
  if (user === "R" && comp === "rock") {
    console.log(`User chose ${user} and computer chose ${comp} TIE`);
  } else if (user === "P" && comp === "paper") {
    console.log(`User chose ${user} and computer chose ${comp} TIE`);
  } else if (user === "S" && comp === "scissors") {
    console.log(`User chose ${user} and computer chose ${comp} TIE`);
  }
  //ROCK
  else if (user === "R" && comp === "scissors") {
    console.log(`User chose ${user} and computer chose ${comp} YOU WIN`);
  } else if (user === "S" && comp === "rock") {
    console.log(`User chose ${user} and computer chose ${comp} YOU LOOSE`);
  }
  //PAPER
  else if (user === "P" && comp === "rock") {
    console.log(`User chose ${user} and computer chose ${comp} YOU WIN`);
  } else if (user === "R" && comp === "paper") {
    console.log(`User chose ${user} and computer chose ${comp} YOU LOOSE`);
  }
  //SCISSORS
  else if (user === "S" && comp === "paper") {
    console.log(`User chose ${user} and computer chose ${comp} YOU WIN`);
  } else if (user === "P" && comp === "scissors") {
    console.log(`User chose ${user} and computer chose ${comp} YOU LOOSE`);
  }
};

compareChoices(userChoice, compFinalValue);
