// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Briefly describe your project.'
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Select which type of license you would like to give your project.',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC License'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command is needed to install dependencies?'
    },
    {
        type: 'input',
        name: 'contribution-guidelines',
        message: 'What are your contribution guidelines?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command is needed to run tests?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please include any additional information required to use this repository.'
    }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();