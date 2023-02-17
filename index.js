const fs = require('fs');
const inquire = require('inquirer');
const generateQuestions = require('./utils/generateQuestions')
const generateMarkdown = require('./utils/generateMarkdown');

const questions = generateQuestions;

function writeToFile(data) {
    fs.writeFile('README.md', generateMarkdown(data), err => err ? console.error(err) : console.log(''))
}

function init() {
    inquire.prompt(questions).then((response) => {
        console.log('Generating README...');
        writeToFile(response);
    });
}

init();
