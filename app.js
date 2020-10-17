const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util= require("util");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const mkdirAsync = util.promisify(fs.mkdir);
const writeFileAsync = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const Employee = require("./lib/htmlRenderer");
const render = require("./lib/htmlRenderer");

//Collect information about team members and create objects
const questions = [
    { name: 'name', message: "Employee Name: "},
    { name: 'id', message: "Employee ID:"},
    { name: 'email', message: "Employee Email:" },
    { type: 'list',
        name: 'role',
        message: "Choose Employee Role",
        choices: ['Manager', 'Intern', 'Engineer']
    },
];

//Questions for each job level
const questionForManager = [
    { name: 'officeNumber', message: "Office Number:" },
];

const questionForIntern = [
    { name: 'school', message: "School or University:" },
];

const questionForEngineer = [
    { name: 'github', message: "GitHub Account:" },
];

const confirm = [
    { type: 'confirm',
        name: 'adding',
        message: 'Input next employee:',
    },
,

// Adding more employees
const init = async () => {
    const employees = [];
    let addMore = true;
    while (addMore) {
        const { name, id, email, role } = await inquirer.prompt(questions);
    }
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
const html = render(emploees);

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
