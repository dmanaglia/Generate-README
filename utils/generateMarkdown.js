// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contact Me](#contact Me)

  
  ## Installation
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}

  ## Credits
  
  

  ## License
  
  ${data.license}

  ## Badges
  
   

  ## Features
  

  
  ## How to Contribute
  
  ${data.contribute}
  
  ## Tests
  
  ${data.test}

  ## Questions
  https://www.github.com/${data.userName}
  ${data.email}
  `
}

module.exports = generateMarkdown;