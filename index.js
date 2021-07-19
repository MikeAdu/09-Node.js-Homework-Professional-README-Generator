// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path')
// TODO: Create an array of questions for user input
const questions = [
    "What is your project title?",
    "Describe your project",
    'what are your instalation instructions',
    "Describe the usage information",
    "what are the contribuations guidlines",
    "What are the test instructions",
    "What license does your project use",
    "What is your github username?",
    "What is your email?",

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
 }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
