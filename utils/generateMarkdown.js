// creates a function that returns a license badge based on which license is passed in
// if there is no license, it returns an empty string
const renderLicenseBadge = licenseBadge => {
    if (!licenseBadge) {
        return '';
    }

    return `
        ![License](https://img.shields.io/badge/License-${licenseBadge.split(' ').join(' ')}-brightgreen.svg)
    `;
};

// creates a function that returns the license link
// if there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) {
        return '';
    } 
    else if (license === 'MIT') {
        return 'https://opensource.org/licenses/MIT'
    }
    else if (license === 'GNU GPLv3') {
        return 'https://www.gnu.org/licenses/gpl-3.0'
    }
    else if (license === 'Apache License 2.0') {
        return 'https://opensource.org/licenses/Apache-2.0'
    }
    else if (license === 'ISC License') {
        return 'https://opensource.org/licenses/ISC'
    }
};

// creates a function that returns the license section of README
// if there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== '') {
        return `Licensed under ${license}`
    }
    return '';
};

// creates a function to generate markdown for README
function generateMarkdown(userDataInput) {
    const { license, ...data } = userDataInput
  return `
  # ${data.title}
 
  ${renderLicenseBadge(license)}
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [License](#license)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ##Instalations
  ${data.installation}

  ## License
  ${renderLicenseLink(license)}
  ${renderLicenseSection(license)}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  Feel free to contact me directly at ${data.email}. If you would like to see more of my work, you can do so via https://github.com/${data.username}.
`;
};

module.exports = generateMarkdown;