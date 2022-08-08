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

        if (!name)
            throw new CustomError(400, "Produto deve conter um nome");

        if (!tags)
            throw new CustomError(400, "Tags do produto devem ser inseridas");

        // necessário uma checagem caso usuário mande tags iguais, ex: ["casual", "metal", "casual"]

        const productAlreadyExists = await this.productDatabase.selectProductBySpecificName(name);

        if (productAlreadyExists)
            throw new CustomError(422, "Produto já cadastrado no sistema"); 

        const newProduct: ProductDB = { name };
        
        await this.productDatabase.insertProduct(newProduct, tags);
    };

    public getProducts = async (output: ProductSearchDTO): Promise<Product | Product[] | undefined> => {
        const { id, name, tags } = output;

        if (!id && !name && !tags) {
            throw new CustomError(400, "Parâmetros de busca inválidos");
        };

        let response: Product | Product[] = [];

        if (id) {
            response = await this.productDatabase.selectProductById(id);
        } else if (name) {
            response = await this.productDatabase.selectProductByKeyword(name)
        } else if (tags) {
            response = await this.productDatabase.selectProductByTags(tags.split(","));
        }

        return response;
    };
};