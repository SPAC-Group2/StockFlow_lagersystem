"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = getProducts;
exports.getProductsInStock = getProductsInStock;
const exampleService_js_1 = require("../services/exampleService.js");
function getProducts(req, res) {
    const data = (0, exampleService_js_1.getExampleData)();
    res.json(data);
}
function getProductsInStock(req, res) {
    const id = req.params.id;
    const data = (0, exampleService_js_1.getExampleData3)();
    res.json(data);
}
