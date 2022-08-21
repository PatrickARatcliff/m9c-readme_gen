// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const genMD = require("../m9c-readme_gen/utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'title',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'description',
        message: 'Enter a description for your project:',
        name: 'description',
    },
    {
        type: 'install',
        message: 'Enter instructions for installation:',
        name: 'install',
    },
    {
        type: 'usage',
        message: 'Enter usage information:',
        name: 'usage',
    },
    {
        type: 'contribute',
        message: 'Enter contribution guidelines:',
        name: 'contribute',
    },
    {
        type: 'test',
        message: 'Enter test instructions:',
        name: 'test',
    },
];
// TODO: Create a function to write README file
function writeToFile(fileName) {
    inquirer
        .prompt(questions)
        .then((data) => {
            fs.writeFile(fileName, genMD(data), (err) =>
                err ? console.error(err) : console.log('A Markdown document has been created for your project!')
            );
        }
     );
};

// TODO: Create a function to initialize app
function init() { 
    writeToFile('README.md')
}

// Function call to initialize app
init();
