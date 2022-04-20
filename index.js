const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Developer = require('./lib/Developer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const teamArray = [];

const addManager = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
            validate: nameInput =>{
                if(nameInput){
                    return true;
                }else{
                    console.log("Please enter the manager's name.");
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: nameInput =>{
                if (isNaN(nameInput)){
                    console.log("Please enter the manager's ID.");
                    return false;
                }else{
                    return true;
                }
            }
        }, 
        {
            type: 'input',
            name: 'email', 
            message: "Please enter the manager's email.",
            validate: email =>{
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if(valid){
                    return true;
                }else{
                    console.log("Please enter an email.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput =>{
        const { name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = ()=>{
    console.log(`
    =========================
    Add Employees to the Team
    =========================
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role', 
            message: "Please choose your employees",
            choices: ['Developer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "what's the name of the employee?",
            validate: nameInput =>{
                if(nameInput){
                    return true;
                }else{
                    console.log("Please enter an employees name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput =>{
                if (isNaN(nameInput)){
                    console.log("Please enter the employee's ID.");
                    return false;
                }else{
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Developer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData =>{
        let {name, id, email, role, github, school, confirmAddEmployee} = employeeData;
        let employee;

        if(role === 'Developer'){
            employee = new Developer (name, id, email, github);
            console.log(employee);
        }else if (role === 'Intern'){
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        teamArray.push(employee);

        if(confirmAddEmployee){
            return addEmployee(teamArray);
        }else{
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err =>{
        if (err){
            console.log(err);
            return;
        }else {
            console.log("Your team profile hase been created! Please check out the index.html");
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray =>{
        return generateHTML(teamArray);
    })
    .then(pageHTML=>{
        return writeFile(pageHTML); 
    })
    .catch(err=>{
        console.log(err);
    });