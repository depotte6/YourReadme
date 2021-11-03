// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ''
  }
  return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ''
  }
  return `\n* [License](#license)\n`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  }
  return `## [License](#table-of-contents)
  The application is covered under the following license:
  ${renderLicenseLink(license)}
    `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  ${renderLicenseLink(data.license)}
  *[Contributiong](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installation
  To install dependencies run these commands:
  
  ${data.installation}
 

  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}

  ## Tests
  Run the following commands to run tests:
  ${data.test}

  ## Questions
  For questions contact me at [email: ${data.email}](mailto:${data.email})
  Find me at [${data.github}](https://github.com/${
    data.github
  }/).



`;
}

module.exports = generateMarkdown;
