function renderLicenseBadge(license){
  if(license === 'None'){
    return '';
  }else {
    return `![GitHub license](${renderLicenseLink(license)})`
  }
}

function renderLicenseLink(license) {
  switch(license){
    case 'MIT':
      return `https://img.shields.io/badge/license-MIT-blue.svg`;
    case 'APACHE 2.0':
      return `https://img.shields.io/badge/license-Apache_2.0-blue.svg`;
    case 'GPL 3.0':
      return `https://img.shields.io/badge/license-GPL_3.0-blue.svg`;
    case 'BSD 3':
      return `https://img.shields.io/badge/license-BSD_3-blue.svg`;
  }
}

function renderLicenseSection(license) {
  if(license === 'None'){
    return `None.`;
  } else {
    return `This project is licensed under the ${license} license.`
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
    
  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Test](#tests)

  * [Questions](#questions)
  
  ## Installation

  To install necessary dependencies, run the following command:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing
  
  ${data.contribute}
  
  ## Tests

  To run tests, run the following command:
  
  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.userName}](https://www.github.com/${data.userName}).
  `
}

module.exports = generateMarkdown;