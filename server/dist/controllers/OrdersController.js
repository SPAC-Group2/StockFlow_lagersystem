"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = getOrders;
exports.getOrder = getOrder;
const exampleService_js_1 = require("../services/exampleService.js");
function getOrders(req, res) {
    const data = (0, exampleService_js_1.getExampleData2)();
    res.json(data);
}
function getOrder(req, res) {
    const id = req.params.id;
    const data = (0, exampleService_js_1.getExampleData2)();
    res.json(id);
}
