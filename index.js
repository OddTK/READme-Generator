// used inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs')

// created the questions, with their message, and their type here using inquirer
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your repo?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your app?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the installation of your app?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage of your app?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license would you like to apply to your app?',
        name: 'license',
        choices: ['MIT License', 'Apache License', 'GPL License', 'N/A'],
    },
    {
        type: 'input',
        message: 'How can others contribute to your app?',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'What are the testing instructions for your app?',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Github username:',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Email address:',
        name: 'email',
    }
    // this will then take the answers and writefile using fs.
    // it takes 3 parameters - file path, its content - which has been created below, and what'll happen if there's an error or if it succeeds
]).then(answers => {
    fs.writeFile(
        'README.md',
        generateMD(answers),
        err => err ? console.error(err) : console.log('success'))

// This function takes in the users answers and returns a stylized 'page' in the format/style of a readme.md file
function generateMD(answers) {
return`
# ${answers.title}
## TABLE OF CONTENTS:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Testing](#testing)
- [Questions](#questions)
### DESCRIPTION:
${answers.description}
### INSTALLATION:
The following needs to be installed in order to run the repo:
${answers.installation}
### USAGE:
${answers.usage}
### LICENSE:
This project is licensed under:
${answers.license}
### CONTRIBUTIONS:
${answers.contributions}
### TESTING:
${answers.testing}
### QUESTIONS:
If you have any questions on this application please feel free to contact me on
[Github](https://github.com/${answers.username}/) or through email at: ${answers.email}
`
}
});
