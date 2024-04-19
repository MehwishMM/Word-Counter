#!/usr/bin/env node 
// import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer";
import chalk from "chalk";

//Declare a constant 'answers' and assign it to the result of inquirer.prompt function
const answers:{
    sentence :string
} =await inquirer.prompt([
{
   name :"sentence",
   type:  "input",
   message:chalk.red.bold("Enter your sentence to count the word"),



},
]);
const words = answers.sentence.trim().split("");
console.log(words);
console.log(chalk.green.bold(`your sentence to count the word is ${words.length}`)); 