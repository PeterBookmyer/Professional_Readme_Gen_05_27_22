// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
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
      name: "test",
    },
     {
      type: "checkbox",
      choices: ["Public Domain", "LGPL", "Permissive"],
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
  ]);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data => {
        
    }

}




// TODO: Create a function to initialize app
function init() {}




// Function call to initialize app
init();
