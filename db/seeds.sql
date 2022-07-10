INSERT INTO department
    (name)
VALUES
    ('Sales & Marketing'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, department_id, salary)
VALUES
    ('Sales Lead', 1, 100000),
    ('Salesperson', 1, 80000),
    ('Lead Engineer', 2, 150000),
    ('Software Engineer', 2, 120000),
    ('Account Manager', 3, 160000),
    ('Accountant', 3, 125000),
    ('Legal Team Lead', 4, 250000),
    ('Lawyer', 4, 190000);

INSERT INTO employee
    (first_name, last_name, role_id, department_id, manager_id)
VALUES
    ('James', 'Fraser', 1, 1, NULL),
    ('Jack', 'London', 2, 1, 1),
    ('Robert', 'Bruce', 3, 2, NULL),
    ('Peter', 'Greenaway', 2, 1, 3),
    ('Derek', 'Jarman', 5, 3, NULL),
    ('Paolo', 'Pasolini', 6, 3, 5),
    ('Heathcote', 'Williams', 7, 4, NULL),
    ('Sandy', 'Powell', 8, 4, 7);
    