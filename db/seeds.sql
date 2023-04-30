INSERT INTO department (id, name)
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "Finance"),
       (4, "Legal");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Sales Lead", 100000, 1),
       (2, "Salesperson", 80000, 1),
       (3, "Lead Engineer", 150000, 2),
       (4, "Software Engineer", 120000, 2),
       (5, "Account Manager", 160000, 3),
       (6, "Accountant", 125000, 3),
       (7, "Legal Team Lead", 250000, 4),
       (8, "Lawyer", 190000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Johnathan", "Joestar", 1),
       (2, "Joseph", "Joestar", 1),
       (3, "Jotaro", "Kujo", 2),
       (4, "Josuke", "Higashikata", 2, 2),
       (5, "Giorno", "Giovana", 3),
       (6, "Jolene", "Kujoh", 3, 3),
       (7, "Johnny", "Joestar", 4),
       (8, "Josuke", "Higashikata", 4);