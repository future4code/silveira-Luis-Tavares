import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductCreationDTO } from "../interfaces/Product";

export class ProductController {
    constructor (
        private productBusiness: ProductBusiness
    ) {};
    public createProduct = async (req: Request, res: Response): Promise<void> => {
        try {
            const { name, tags } = req.body;

            const newProduct: ProductCreationDTO = {
                name,
                tags
            };

            await this.productBusiness.createProduct(newProduct);

        } catch (error: any) {
            res.status(error.message || 500).send({ error: error.message });
        }
    };
};