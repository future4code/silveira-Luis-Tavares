import { ProductDatabase } from "../data/ProductDatabase";

import { CustomError } from "../errors/CustomError";

import { ProductCreationDTO, ProductDB, ProductSearchDTO } from "../interfaces/Product";
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

    public getProducts = async (output: ProductSearchDTO): Promise<Product | Product[] | undefined> => {
        const { id, name, tags } = output;

        if (!id || !name || !tags) {
            throw new CustomError(400, "Parâmetros de busca inválidos");
        };

        let response: any = {} || [];

        if (id) {
            response = await this.productDatabase.selectProductById(id);
        } else if (name) {
            response = await this.productDatabase.selectProductByKeyword(name)
        } else if (tags) {
            response = await this.productDatabase.selectProductByTags(tags);
        }

        return response;
    };
};