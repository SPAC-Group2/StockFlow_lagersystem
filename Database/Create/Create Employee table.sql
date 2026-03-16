CREATE TABLE Employees(
employee_id bigserial PRIMARY KEY,
username text UNIQUE NOT NULL,
name text NOT NULL,
level smallint references EmployeeLevels(id),
password_hash text NOT NULL,
primary_location int references Warehouses(warehouse_id)
);


