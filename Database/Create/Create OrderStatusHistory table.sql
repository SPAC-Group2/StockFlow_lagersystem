CREATE TABLE OrderStatusHistory(
history_id bigserial PRIMARY KEY,
order_id bigint references Orders(order_id),
status_id smallint references OrderStatus(status_id),
status_date timestamp default current_timestamp,
employee_id bigint references Employees(employee_id)
);