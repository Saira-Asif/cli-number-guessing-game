#!  /usr/bin/env node

import inquirer from "inquirer";

//? 1) Computer will generate a general number. -done
//? 2) User Input for guessing number. -done
//? 3) Compare user input with computer generated number and show result.

const randomNumber = Math.floor(Math.random() * 10 + 1);

console.log("Welcome to Number Guessing Game!");
const Answer = await inquirer.prompt([
  {
    name: "UserGuessedNumber",
    type: "number",
    message: "Please Guess a Number from 1-10.",
  },
]);

if (Answer.UserGuessedNumber === randomNumber) {
  console.log("Congrats! You guessed the right number.");
} else {
  console.log("You guessed the wrong number.");
}
