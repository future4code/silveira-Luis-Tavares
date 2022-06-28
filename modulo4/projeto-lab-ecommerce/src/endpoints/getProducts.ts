import { Request, Response } from "express";
import { selectProducts } from "../data/selectProducts";

export const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await selectProducts();

        res.status(200).send(products);
        
    } catch (error: any) {
        res.status(res.statusCode !== 200 ? res.statusCode : 500).send(error.sqlMessage || error.message);
    }
};