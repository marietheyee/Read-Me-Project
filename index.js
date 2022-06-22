// TODO: Include packages needed for this application
// const fs = require('fs');
// const inquirer = require('inquirer');
var path = require('path');
var fs = require('fs');
var inquirer = require('inquirer');
var generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'parent',
        message: 'Name(s) of Parent(s)',
    },
    {
        type: 'input',
        name: 'birthdate',
        message: 'Parent(s) Date of Birth',
    },
    {   
        type: 'input',
        name: 'age',
        message: 'Parent(s) Age(s)',
    },
    {   
        type: 'input',
        name: 'doctor',
        message: 'Primary Care Doctor',
    },
    {
        type: 'input',
        name: 'meds',
        message: 'Please list current medications',
    },
    {
        type: 'input',
        name: 'pharmacy',
        message: 'Name and phone number of pharmacy',
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("generating README...");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    });
}

// Function call to initialize app
init();
