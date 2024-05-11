#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const promptColor = chalk.blue;

const answer = await inquirer.prompt([
    { message: promptColor("Enter your guess number between 1 to 10"), type: "number", name: "guessedNumber" }
]);

const randomNumber = Math.floor(Math.random() * 10) + 1;

if (!(answer.guessedNumber > 10)) {
    if (answer.guessedNumber === randomNumber) {
        console.log(chalk.green("You guessed the correct number!"));
    } else {
        console.log(chalk.red("You guessed the wrong number!"));
    }
} else {
    console.log(chalk.red("Please enter a valid number"));
}