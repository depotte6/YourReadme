// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of {title}",
    },
    {
        type: "input",
        name: "usage",
        message: "What should the user know about your repository?",
    },
    {
        type: "input",
        name: "contribution",
        message: "Provide any information relating to contributing here",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter the command to install dependencies",
        default: "npm install",
    },
    {
        type: "input",
        name: "test",
        mesaage: "Enter the command to run tests",
        default: "npm test",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license will this project have?",
        choices: ['MIT', 'APACE 2.0', 'GPL 3.0', 'BSD 3', 'NONE'],
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your e-mail address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log("Generating your project's README");
        writeToFile("README.md", generateMarkdown({response}));
    });
}

// Function call to initialize app
init();
