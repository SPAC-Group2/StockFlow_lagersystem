"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = getProducts;
const exampleService_js_1 = require("../services/exampleService.js");
function getProducts(req, res) {
    const data = (0, exampleService_js_1.getExampleData)();
    res.json(data);
}
