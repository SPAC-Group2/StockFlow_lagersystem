CREATE TABLE Customers (
	customer_id bigserial PRIMARY KEY,
	public_id text UNIQUE,
	first_name text NOT NULL,
	last_name text NOT NULL,
	email text UNIQUE NOT NULL,
	customer_location text
);