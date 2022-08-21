const moment = require('moment');
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
  let dateStamp = moment().format("DD/MM/yyyy, h:mm:ss a");
  return `# ${data.title}
  # Date: ${dateStamp}

  ## Table of Contents
  - [Project Description](#project-description)
  - [Installation Instructions](#installation-instructions)
  - [Usage Information](#usage-information)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)

  ## Project Description
  - ${data.description}

  ## Installation Instructions
  - ${data.install}

  ## Usage Information
  - ${data.usage}

  ## Contribution Guidelines
  - ${data.contribute}

  ## Test Instructions
  - ${data.test}`;
}

module.exports = generateMarkdown;
