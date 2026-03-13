"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const ProductsController_js_1 = require("../controllers/ProductsController.js");
exports.routes = express_1.default.Router();
exports.routes.get("/products", ProductsController_js_1.getProducts);
