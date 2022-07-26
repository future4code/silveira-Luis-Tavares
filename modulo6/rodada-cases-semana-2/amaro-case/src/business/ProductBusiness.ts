import { ProductDatabase } from "../data/ProductDatabase";

import { CustomError } from "../errors/CustomError";

import { ProductCreationDTO, ProductDB } from "../interfaces/Product";
import { Product } from "../models/Product";

import { IdGenerator } from "../services/IdGenerator";

export class ProductBusiness {
    constructor (
        private idGenerator: IdGenerator,
        private productDatabase: ProductDatabase,
    ) {};

    public createProduct = async (product: ProductCreationDTO) => {
        const { name, tags } = product;

        if (!name) {
            throw new CustomError(400, "Produto deve conter um nome");
        }

        if (!tags) {
            throw new CustomError(400, "Tags de produto inválidas");
        }

        const newProduct: ProductDB = { name };

        await this.productDatabase.insertProduct(newProduct, tags);
    };
};