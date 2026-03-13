CREATE TABLE Orders(
order_number bigserial PRIMARY KEY,
public_id text,
customer_id bigint NOT NULL references customers(customer_id),
date_of_creation timestamp default current_timestamp,
created_by_employee bigint references Employees(employee_id)
)