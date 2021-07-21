// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project title?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Describe your project"
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what are your installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: "Describe the usage information"
    },
    {
        type: 'input',
        name: 'contributions',
        message: "what are the contributions guidelines"
    },
    {
        type: 'input',
        name: 'instructions',
        message: "What are the test instructions"
    },
    {
        type: 'list',
        name: 'license',
        message: "What license does your project use",
        choices: ["MIT", "Apache", "GPLv3", "None"],
    },
    {
        type: 'input',
        name: 'username',
        message: "What is your github username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email?"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    // prompts,
    inquirer.prompt(questions)
        // store response,
        .then((answers) => {
            console.log("readme.md has been generated")
            // readme generated,
            writeToFile('readme.md', generateMarkdown(answers))
        })

}

// Function call to initialize app
init();
