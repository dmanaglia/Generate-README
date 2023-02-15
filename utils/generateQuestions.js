const questions = [
    {
        type: "text",
        message: "Enter your project name:",
        name: 'title'
    },
    {
        type: "text",
        message: "Enter your project description:",
        name: 'description'
    },
    {
        type: "text",
        message: "Enter specific installation instructions:",
        default: 'npm i',
        name: 'installation'
    },
    {
        type: "text",
        message: "Enter usage instructions:",
        name: 'usage'
    },
    {
        type: "list",
        message: "Enter your license:",
        name: 'license',
        choices: ['MIT', 'Something', 'Something Else', 'test', 'None']
    },
    {
        type: "text",
        message: "Enter contribution guidelines:",
        name: 'contribute'
    },
    {
        type: "text",
        message: "Enter testing instructions:",
        name: 'test'
    },
    {
        type: "text",
        message: "Enter your GitHub username:",
        name: 'userName'
    },
    {
        type: "text",
        message: "Enter your email:",
        name: 'email'
    },
];

module.exports = questions;