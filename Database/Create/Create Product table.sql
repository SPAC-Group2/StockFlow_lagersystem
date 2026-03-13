CREATE TABLE Products(
product_id bigserial PRIMARY KEY,
public_id text UNIQUE,
name text NOT NULL,
description text,
price money NOT NULL,
category_id int references Categories(category_id)
);