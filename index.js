// TODO: Include packages needed for this application
const fs = require('fs');
const inquire = require('inquirer');
const generateQuestions = require('./utils/generateQuestions')
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = generateQuestions;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions).then((response) => writeToFile('README.md', response));
}

// Function call to initialize app
init();