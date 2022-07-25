import { ProductDatabase } from "../data/ProductDatabase";
import { TagDatabase } from "../data/TagDatabase";
import { CustomError } from "../errors/CustomError";
import { ProductCreationDTO } from "../interfaces/Product";
import { Product } from "../models/Product";
import { IdGenerator } from "../services/IdGenerator";

export class ProductBusiness {
    constructor (
        private idGenerator: IdGenerator,
        private productDatabase: ProductDatabase,
        private tagDatabase: TagDatabase
    ) {};

    public createProduct = async (product: ProductCreationDTO) => {
        const { name, tags } = product;

        if (!name) {
            throw new CustomError(400, "Produto deve conter um nome");
        }

        if (!tags) {
            throw new CustomError(400, "Tags de produto inválidas");
        }

        const productId = this.idGenerator.generateId();
        const newProduct = new Product(productId, name);

        await this.productDatabase.insertProduct(newProduct);
        // talvez tenha que fazer a inserção de tags no banco de dados através do database de produto
        // vai ser necessário também mexer na tabela de relação entre produto e tag
        await this.tagDatabase.insertTags(tags);

    };
};