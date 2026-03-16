



-- Function for making a public id for products
CREATE OR REPLACE FUNCTION generate_Products_public_id()
RETURNS TRIGGER AS $$
DECLARE
	cat text;
BEGIN
    IF NEW.public_id IS NULL THEN
		SELECT categories.cateory
        INTO cat
        FROM Categories
        WHERE category_id = NEW.category_id;
        NEW.public_id := 'PRO' || LEFT(cat,3) || NEW.product_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;



-- Trigger for making public id on products
CREATE TRIGGER set_products_public_id
BEFORE INSERT ON Products
FOR EACH ROW
EXECUTE FUNCTION generate_Products_public_id();

