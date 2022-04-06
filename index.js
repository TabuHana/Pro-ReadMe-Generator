//require's
const inquirer = require('inquirer')
const fs = require('fs')
//const generateMarkdown = require('./utils/generateMarkdown.js')

//Inquirer needs type, name, & message

//Array of questions for user
const questions = [
  //Proj Title
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  //Proj Description
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?'
  },
  //Proj Table of Contents
  {
    type: 'input',
    name: 'Proj-Title',
    message: 'What is the name of your project?'
  },
  //Proj Installation
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for your project?'
  },
  //Proj Usuage
  {
    type: 'input',
    name: 'usuage',
    message: 'What is the intended usuage of your project?'
  },
  //Proj License
  {
    type: 'list',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'Common Development and Distribution', 'None'],
    message: 'What is the licensing of your project?'
  },
  //Proj Contributions
  {
    type: 'input',
    name: 'contributions',
    message: 'What are the contribution guidelines for your project?'
  },
  //Proj Tests
  {
    type: 'input',
    name: 'tests',
    message: 'What are the testing guidelines for your project?'
  },
  //Proj Questions
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username for questions?'
  },
  //Proj Questions
  {
    type: 'input',
    name: 'email',
    message: 'What is your email for questions?'
  }
]

// // function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then(input => {
    console.log(input)
  })
  .catch(err => console.log(err))
}

// function call to initialize program
init()


