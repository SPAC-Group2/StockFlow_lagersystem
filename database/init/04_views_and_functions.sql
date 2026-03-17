-- view for getting products
CREATE VIEW ProductsView AS
	SELECT Products.public_id, Products.name, Products.description, Products.price, categories.category FROM Products
	JOIN Categories ON Products.category_id = categories.category_id;