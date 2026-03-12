class Product {
    public_id: string;
    name: string;
    description: string;
    price: number;
    stock: bigint;
    currency_name: string;
    currency_symbol: string;
    category_id: bigint; // Foreign Key

    constructor(public_id, name, description, price, stock = 0, currency_name = "Euro", currency_symbol = "€", category_id) {
        this.public_id = public_id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.currency_name = currency_name;
        this.currency_symbol = currency_symbol;
        this.category_id = category_id;
    }
}