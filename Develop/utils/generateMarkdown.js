function licenses() {
  let mit = {
    name: "MIT License",
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "(https://opensource.org/licenses/MIT)",
    text: "Copyright (c) [2022] [Peter Bookmyer]",
  };
  let isc = {
    name: "ISC License",
    badge:
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    link: "(https://opensource.org/licenses/ISC)",
    text: "Copyright (c) [2022] [Peter Bookmyer]",
  };
  return data;
}

//renders license
function renderLicenseBadge(license) {}

//renders license link
function renderLicenseLink(license) {}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# ${license.mit.text}`;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
`;
}

renderLicenseBadge();
module.exports = { generateMarkdown, licenses };
