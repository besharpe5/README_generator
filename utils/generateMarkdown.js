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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;