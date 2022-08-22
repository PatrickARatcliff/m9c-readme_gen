// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const genMD = require("../m9c-readme_gen/utils/generateMarkdown")
// require
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your full name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a one-sentence description for you project:',
        name: 'summary',
    },
    {
        type: 'input',
        message: 'Enter a detailed description for your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter instructions for installation:',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Enter usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines:',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Enter test instructions:',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Choose a license:',
        name: 'license', 
        choices: ["MIT", "Apache", "GPL", "BSD-2", "BSD-3", "BSD-4", "none"],
    },
    
];
// TODO: Create a function to write README file
function writeToFile(fileName) {
    inquirer.prompt(questions)
       
    .then((data) => {
            fs.writeFile(fileName, genMD(data), (err) =>

                err ? console.error(err) : console.log('A Markdown document has been created for your project!')
            )
        }
        );
};
// TODO: Create a function to initialize app
function init() {
    writeToFile('README.md');
};
// Function call to initialize app
init();
