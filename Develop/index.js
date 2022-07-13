// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

function licenses(userChoice) {
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

  if (!`${userChoice}`) {
    return [];
  }
  if (`${userChoice}` === "MIT") {
    return mit;
  }
  if (`${userChoice}` === "ISC") {
    return isc;
  }
}
// array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please enter a description",
      name: "description",
    },
    {
      type: "input",
      message: "Please enter installation instrucions",
      name: "install",
    },
    {
      type: "input",
      message: "Please enter usage info",
      name: "usage",
    },
    {
      type: "input",
      message: "Who contributed to this project?",
      name: "contrib",
    },
    {
      type: "input",
      message: "What tests we performed on this project?",
      name: "tests",
    },
    {
      type: "checkbox",
      choices: ["MIT", "ISC"],
      message: "Please choose a License",
      name: "license",
    },
    {
      type: "input",
      message: "What is your GitHub User Name?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ])
  .then((response) => {
    const output = response.license;
    const template = `# ${response.title}
## DESCRIPTION
-${response.description}

## TABLE OF CONTENTS
-[Installation](#installation)

-[Usage](#usage)

-[Contribution](#contribution)

-[License](#licenses)

-[Tests](#tests)

-[Contact](#contact)

## INSTALLATION
-${response.install}

## USAGE
-${response.usage}

## CONTRIBUTION
-${response.contrib}

## LICENSES
${output.name}
${output.text}

## TESTS
-${response.tests}

## CONTACT
-${response.github} 
-${response.email}`;

    // function to write README file
    fs.writeFile("README.MD", template, (err) => {
      err ? console.error(err) : console.log("You have created a README!");
    });
  });
