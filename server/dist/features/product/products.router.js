"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const products_service_1 = require("./products.service");
exports.productRouter = express_1.default.Router();
exports.productRouter.get("/", async (req, res) => {
    const products = await (0, products_service_1.getProducts)();
    /*if (req.headers["accept"] == "application/xml") {
      const root = create().ele("customers");
      customers.forEach((i) => {
        root.ele("customer", i);
      });
  
      res.status(200).send(root.end({ prettyPrint: true }));
    } else {
      res.json(customers);
    }*/
    res.json(products);
});
