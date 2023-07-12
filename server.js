const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: 
// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role



// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
// Connect to database

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employeeTracker_db'
  },
);



inquirer
  .prompt([
    {
      type: 'list',
      name: 'home',
      message: 'What would you like to do?',
      choices: [
        "View all departments", 
        "View all roles", 
        "View all employees", 
        "Add a department", 
        "Add a role", 
        "Add an employee", 
        "Update an employee role",
        new inquirer.Separator(),
        "Quit"
      ]
    },
  ])
  .then((answers) => {
    switch (answers) {
        case "View all departments":
            // db.query('INSERT INTO "//" (movie_name) VALUES (?)', params, function (err, results) {
            //     res.json({
            //         message: 'success',
            //         data: body
            //     })
            //   });
        case "View all roles":

        case "View all employees":

        case "Add a department":

        case "Add a role":

        case "Add an employee":

        case "Update an employee role":

        case "Quit":
            break;

        default: 

    }
    console.log(answers);
    // db.query('INSERT INTO "//" (movie_name) VALUES (?)', params, function (err, results) {
    //     res.json({
    //         message: 'success',
    //         data: body
    //     })
    //   });

  });

  //added ________ into database

//   {
//     type: 'input',
//     name: 'departmentName',
//     message: 'What is the name of the department?',
//     when(answers) {
//         return answers.home == "Add a department" 
//     }
// },
// {
//     type: 'input',
//     name: 'addRole',
//     message: 'What is the name of the role?',
//     when(answers) {
//         return answers.home == "Add a role" 
//     }
// },
// {
//     type: 'input',
//     name: 'newRoleSalary',
//     message: 'What is the salary of the role?',
//     when(answers) {
//         return answers.addRole == "Add a department" 
//     }
// },
// {
//     //CAN'T HARD-CODE THIS ONE!
//     type: 'list',
//     name: 'departmentCategory',
//     message: 'Which department does the role belong to?',
//     choices: [
//         "Sales", 
//         "View all roles", 
//         "View all employees", 
//         "Add a department", 
//     ]
// },