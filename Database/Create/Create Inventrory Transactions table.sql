CREATE TABLE InventoryTransactions(
transaction_id bigserial PRIMARY KEY,
product_id bigint NOT NULL references Products(product_id),
change_amount int NOT NULL,
type_of_transaction smallint NOT NULL references Transactiontypes(type_id),
Status bool NOT NULL,
location int NOT NULL references WareHouses(warehouse_id),
date_of_transaction timestamp default current_timestamp,
made_by bigint references Employees(employee_id)
);