import { Request, Response } from "express";
import { getExampleData } from "../services/exampleService.js";

export function getProducts(req: Request, res: Response) {
    const data = getExampleData();
    res.json(data);
}

