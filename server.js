const db = require('./db/connection');
const cTable = require('console.table');
const inquirer = require('inquirer');

// Inquirer (CLI User Prompts)
const promptUser = async () => {
    const dbMenu = await inquirer.prompt ([
        {
        type: 'list',
        name: 'options', 
        message: 'What would you like to do?',
        choices: [
                'View All Employees', 
                'Add Employee',
                'Delete Employee',
                'Update Employee Role',
                'Update Employee Manager',
                'View All Roles', 
                'Add Role',
                'Delete Role',
                'View All Departments', 
                'Add Department',
                'Delete Department',
                'View Employees by Manager',
                'View Employees by Department',
                'View Department Budget',
                'Exit',
                ],
        },
    ]);
    return dbMenu.options;
};

// View All by "user choice" function
const viewAll = (userChoice) => {
    if (userChoice === "View All Employees"){
        var sql = "SELECT * FROM employee";
    } if (userChoice === "View All Roles"){
        var sql = "SELECT * FROM role";
    } if (userChoice === "View All Departments"){
        var sql = "SELECT * FROM department";
    }
    db.query(sql, (err, rows) => {
        if (err) {
            console.err(err);
            promptUser();
        } else {
            console.log("\n");
            console.table(rows);
        }
    });
};

// Add Employee function
const addEmployee = async () => {
    const newEmployee = await inquirer.prompt([
        {
            type: 'input',
            name: 'newEmployeeFirstName',
            message: "What is the first name of this employee?",
            // validate: newEmployeeFirstName => {
            //     if (newEmployeeFirstName) {
            //         return true;
            //     } else {
            //         console.log('Please enter a new department name.');
            //         return false;
            //     },
            // },
        },
        {
            type: 'input',
            name: 'newEmployeeLastName',
            message: "What is the last name of this employee?",
            // validate: newEmployeeLastName => {
            //     if (newEmployeeLastName) {
            //         return true;
            //     } else {
            //         console.log('Please enter a new department name.');
            //         return false;
            //     },
            // },
        },
        {
            type: 'number',
            name: 'newEmployeeRoleID',
            message: "What is the Role ID of this employee?",
            // validate: newEmployeeRoleID => {
            //     if (newEmployeeRoleID) {
            //         return true;
            //     } else {
            //         console.log('Please enter a new department name.');
            //         return false;
            //     },
            // },
        },
        {
            type: 'number',
            name: 'newEmployeeManagerID',
            message: "Who is the manager of this employee?",
            // validate: newEmployeeManagerID => {
            //     if (newEmployeeManagerID) {
            //         return true;
            //     } else {
            //         console.log('Please enter a new department name.');
            //         return false;
            //     },
            // },
        },
    ]);
    const sql = `INSERT INTO employee (first_name, last_name, role_id, department_id, manager_id) VALUES (?,?,?,?)`;
    const params = [
        newEmployee.newEmployeeFirstName, 
        newEmployee.newEmployeeLastName,
        newEmployee.newEmployeeRoleID,
        newEmployee.newEmployeeManagerID,
    ];
        db.query(sql, params, (err, result) => {
            if (err) {
                console.error(err);
                promptUser();
            } else {
                console.log(`${newEmployee.newEmployeeFirstName + " " + newEmployee.newEmployeeLastName} succesfully added to Department list.`);
                console.log(result);
            }
        });
};

// Change Employee Role ID function
const updateEmployeeRole = async () => {
    const updateRoleID = await inquirer.prompt([
        {
            type: 'number',
            name: 'currentRoleID',
            message: "What is the current role ID of this employee?",
            // validate: currentRoleID => {
            //     if (currentRoleID) {
            //         return true;
            //     } else {
            //         console.log('Please enter a new department name.');
            //         return false;
            //     },
            // },
        },
        {
            type: 'number',
            name: 'newRoleID',
            message: "What is the new role ID of this employee?",
            // validate: newRoleID => {
            //     if (newRoleID) {
            //         return true;
            //     } else {
            //         console.log('Please enter a new department name.');
            //         return false;
            //     },
            // },
        },
    ])
    const sql = `UPDATE employee SET role_id=? WHERE id=?`;
    const params = [
        updateRoleID.currentRoleID, 
        updateRoleID.newRoleID,
    ];
        db.query(sql, params, (err, result) => {
            if (err) {
                console.error(err);
                promptUser();
            } else {
                console.log(`Succesfully updated Role ID to ${updateRoleID.newRoleID} for this employee.`);
                console.log(result);
            }
        });
};

// Change Employee Manager function
const updateEmployeeManager = async () => {
    const updateManagerID = await inquirer.prompt([
        {
            type: 'number',
            name: 'currentMangerID',
            message: "What is the current ID of this employees manager?",
            // validate: currentManagerID => {
            //     if (currentManagerID) {
            //         return true;
            //     } else {
            //         console.log('Please enter a new department name.');
            //         return false;
            //     },
            // },
        },
        {
            type: 'number',
            name: 'newManagerID',
            message: "What is the ID of this employees manager?",
            // validate: newManagerID => {
            //     if (newManagerID) {
            //         return true;
            //     } else {
            //         console.log('Please enter a new department name.');
            //         return false;
            //     },
            // },
        },
    ])
    const sql = `UPDATE employee SET manager_id=? WHERE id=?`;
    const params = [
        updateManagerID.currentManagerID, 
        updateManagerID.newManagerID,
    ];
        db.query(sql, params, (err, result) => {
            if (err) {
                console.error(err);
                promptUser();
            } else {
                console.log(`Succesfully updated Manager ID to ${updateManagerID.newManagerID} for this employee.`);
                console.log(result);
            }
        });
};

// Add Role function
const addRole = async () => {
    const newRole = await inquirer.prompt([
        {
            type: 'input',
            name: 'newRoleName',
            message: "What is the name of this role?",
            // validate: newRoleName => {
            //     if (newRoleName) {
            //         return true;
            //     } else {
            //         console.log('Please enter a new department name.');
            //         return false;
            //     },
            // },
        },
        {
            type: 'number',
            name: 'newRoleSalary',
            message: "What is the salary (in dollars) of this role?",
            // validate: newRoleSalary => {
            //     if (newRoleSalary) {
            //         return true;
            //     } else {
            //         console.log('Please enter a new department name.');
            //         return false;
            //     },
            // },
        },
        {
            type: 'number',
            name: 'newRoleDepartmentID',
            message: "What is the Department ID of this role?",
            // validate: newRoleDepartmentID => {
            //     if (newRoleDepartmentID) {
            //         return true;
            //     } else {
            //         console.log('Please enter a new department name.');
            //         return false;
            //     },
            // },
        },
    ]);
    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;
    const params = [
        newRole.newRoleName,
        newRole.newRoleSalary,
        newRole.newRoleDepartmentID,
    ];
        db.query(sql, params, (err, result) => {
            if (err) {
                console.error(err);
                promptUser();
            } else {
                console.log(`${newRole.newRoleName} succesfully added to list of roles.`);
                console.log(result);
            }
        });
};

// Add Department function
const addDepartment = async () => {
    const newDepartment = await inquirer.prompt([
        {
        type: 'input',
        name: 'departmentName',
        message: "What is the name of this department?",
            validate: newDepartment => {
                if (newDepartment) {
                    return true;
                } else {
                    console.log('Please enter a new department name.');
                    return false;
                }
            }
        }
    ]);
    const sql = `INSERT INTO department (name) VALUES (?)`;
    const params = [
        newDepartment.departmentName
    ];
        db.query(sql, params, (err, result) => {
            if (err) {
                console.error(err);
                promptUser();
            } else {
                console.log(`${newDepartment.departmentName} succesfully added to list of departments.`);
                console.log(result);
            }
        });
};

// const viewBy = (userInput) => {

// };

// const viewDepartmentBudget = (userInput) => {

// };

const init = async () => {
    let exit = false;
    while (exit === false) {
        let initialChoice = await promptUser();
        if (initialChoice === "Exit") {
            exit = true;
            db.destroy();
            return;
        } else if (
            initialChoice === "View All Employees" ||
            initialChoice === "View All Roles" ||
            initialChoice === "View All Departments"
            ) {
            viewAll(initialChoice);
        } else if (initialChoice === "Add Employee") {
            let employeeAdded = await addEmployee();
        } else if (initialChoice === "Update Employee Role") {
            let roleUpdated = await updateEmployeeRole();
        } else if (initialChoice === "Update Employee Manager") {
            let managerUpdated = await updateEmployeeManger();
        } else if (initialChoice === "Add Role") {
            let roleAdded = await addRole();
        } else if (initialChoice === "Add Department") {
            let departmentAdded = await addDepartment();
        }
    }
};

init();