// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of {title}"
    },
    {
        type: "LIST",
        name: "license",
        message: "What kind of license will this project have?",
        choices: ['MIT', 'APACE 2.0', 'GPL 3.0', 'BSD 3', 'NONE'],
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
