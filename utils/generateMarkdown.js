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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;