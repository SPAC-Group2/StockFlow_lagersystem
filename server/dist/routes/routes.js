"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const ProductsController_js_1 = require("../controllers/ProductsController.js");
const OrdersController_js_1 = require("../controllers/OrdersController.js");
exports.routes = express_1.default.Router();
exports.routes.get("/products", ProductsController_js_1.getProducts);
exports.routes.get("/products/:id", ProductsController_js_1.getProductsInStock);
exports.routes.get("/orders", OrdersController_js_1.getOrders);
exports.routes.get("/orders/:id", OrdersController_js_1.getOrder);
