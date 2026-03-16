CREATE TABLE OrderItems(
order_id bigint references Orders(order_id),
product_id bigint references Products(product_id),
quantity int NOT NULL,
PRIMARY KEY (order_id, product_id)
)
