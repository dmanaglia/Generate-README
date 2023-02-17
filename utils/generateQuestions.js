const questions = [
    {
        type: "text",
        message: "What is your GitHub username?",
        name: 'userName'
    },
    {
        type: "text",
        message: "What is your email?",
        name: 'email'
    },
    {
        type: "text",
        message: "What is your project name?",
        name: 'title'
    },
    {
        type: "text",
        message: "Please write a short description of your project:",
        name: 'description'
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: "text",
        message: "What commands should be run to install dependencies?",
        default: 'npm i',
        name: 'installation'
    },
    {
        type: "text",
        message: "What command should be run to run tests?",
        default: 'npm test',
        name: 'test'
    },
    {
        type: "text",
        message: "What does the user need to know about using the repo?",
        name: 'usage'
    },
    {
        type: "text",
        message: "What does the user need to know about contributing to the repo?",
        name: 'contribute'
    }
];

module.exports = questions;