import { CustomError } from "../errors/CustomError";
import { Product } from "../models/Product";
import { Database } from "./Database";

export class ProductDatabase extends Database {
    private static TABLE_NAME = "amaro_products";

    public insertProduct = async (product: Product) => {
        try {
            const { id, name } = product;

        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage);
        }
    };
};