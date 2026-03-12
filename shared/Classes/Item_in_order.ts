class Item_in_order {
    order_number: bigint; // Foreign/Primary Key
    product_id: bigint; // Foreign/Primary Key
    quantity: bigint;

    constructor(order_number, product_id, quantity = 0) {
        this.order_number = order_number;
        this.product_id = product_id;
        this.quantity = quantity;
    }
}