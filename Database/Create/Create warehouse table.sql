CREATE TABLE Warehouses(
warehouse_id serial PRIMARY KEY,
public_id text,
city text NOT NULL,
inventory_limit bigint
);