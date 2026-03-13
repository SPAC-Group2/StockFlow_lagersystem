import express from "express";
import { getProducts } from "../controllers/ProductsController.js";

export const routes = express.Router();

routes.get("/products", getProducts);