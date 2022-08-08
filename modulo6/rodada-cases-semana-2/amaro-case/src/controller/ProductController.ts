import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductCreationDTO, ProductSearchDTO } from "../interfaces/Product";

export class ProductController {
    constructor (
        private productBusiness: ProductBusiness
    ) {};

    public createProduct = async (req: Request, res: Response): Promise<void> => {
        try {
            const { name, tags } = req.body;

            const product: ProductCreationDTO = {
                name,
                tags
            };

            await this.productBusiness.createProduct(product);

            res.status(201).send({ message: "Produto criado com sucesso" });

        } catch (error: any) {
            res.status(error.message || 500).send({ error: error.message });
        }
    };

    public getProducts = async (req: Request, res: Response): Promise<any> => {
        try {
            const { id, name, tags } = req.query;
            
            const input: ProductSearchDTO = {
                id: Number(id),
                name: name as string,
                tags: tags as string
            };
            
            const products = await this.productBusiness.getProducts(input);

            res.status(200).send({ products });

        } catch (error: any) {
            res.status(error.message || 500).send({ error: error.message });
        }
    };
};