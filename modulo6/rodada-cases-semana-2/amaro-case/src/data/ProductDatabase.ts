import { Database } from "./Database";

import { CustomError } from "../errors/CustomError";

import { Product } from "../models/Product";
import { Tag } from "../models/Tag";
import { ProductDB } from "../interfaces/Product";

export class ProductDatabase extends Database {
    private static PRODUCT_TABLE_NAME = "amaro_products";
    private static TAG_TABLE_NAME = "amaro_tags";
    private static RELATION_TABLE_NAME = "amaro_products_tags";

    public insertProduct = async (newProduct: ProductDB, tags: string[]): Promise<void> => {
        try {
            await Database.connection
            .insert({
                name: newProduct.name
            })
            .into(ProductDatabase.PRODUCT_TABLE_NAME);

            await this.insertTags(tags);

            for (let tagName of tags) {
                const product = await this.selectProductBySpecificName(newProduct.name);
                const tag = await this.selectTagByName(tagName);

                tag && await this.relateProductAndTagsId(product.id, tag.id);
            };
        
        } catch (error: any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message);
        }
    };

    public insertTags = async (tags: string[]): Promise<void> => {
        try {
            tags.forEach(async (tag: string): Promise<void> => {
                const tagAlreadyExists = await this.selectTagByName(tag);

                if (!tagAlreadyExists && tag !== "") {
                    await Database.connection
                        .insert({
                            name: tag
                        })
                        .into(ProductDatabase.TAG_TABLE_NAME);
                }
            });
            
        } catch (error: any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message);
        }
    };

    public selectTagByName = async (name: string): Promise<Tag> => {
        try {
            const [tag] = await Database.connection
            .select()
            .from(ProductDatabase.TAG_TABLE_NAME)
            .where({ name });

            return tag;
            
        } catch (error: any) {
            throw new CustomError(error.statusCode || 500, error.message || error.message);
        }
    };

    public selectProductBySpecificName = async (name: string): Promise<Product> => {
        try {
            const [product] = await Database.connection
            .select()
            .from(ProductDatabase.PRODUCT_TABLE_NAME)
            .where({ name });

            return product;
            
        } catch (error: any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message);
        }
    };

    public selectProductByKeyword = async (name: string): Promise<Product[] | Product> => {
        try {
            const products = await Database.connection
            .select()
            .from(ProductDatabase.PRODUCT_TABLE_NAME)
            .whereLike("name", `%${name}%`);

            if (!products) {
                throw new CustomError(404, "Produto(s) não encontrado");            
            }

            return products;

        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.sqlMessage || error.message);
        }
    };

    public selectProductById = async (id: number): Promise<Product> => {
        try {
            const [product] = await Database.connection
            .select()
            .from(ProductDatabase.PRODUCT_TABLE_NAME)
            .where({ id });

            if (!product) {
                throw new CustomError(404, "Produto não encontrado");
            }

            return product;

        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.sqlMessage || error.message);
        }
    };

    public selectProductByTags = async (tagNames: string[]): Promise<any> => {
        try {
            // console.log(tagNames);
            
            const promisesArray = tagNames.map((name: string) => {
                return Database.connection
                .select("amaro_products.id", "amaro_products.name")
                .from(ProductDatabase.PRODUCT_TABLE_NAME)
                .innerJoin(
                    "amaro_products_tags",
                    "amaro_products_tags.product_id",
                    "=",
                    "amaro_products.id"
                )
                .innerJoin(
                    "amaro_tags",
                    "amaro_tags.id",
                    "=",
                    "amaro_products_tags.tag_id"
                )
                .where("amaro_tags.name", name);
            });

            const resultDB = await Promise.all(promisesArray)

            if(resultDB.length > 0) {
                let result: Product[] = [];

                resultDB.map(a => a.map(b => result.push({ id: b.id, name: b.name})));

                const resultStrings = result.map(a => JSON.stringify(a));
                const set = new Set(resultStrings);

                result = Array.from(set).map(a => JSON.parse(a));
                
                return result;
            }

        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.sqlMessage || error.message);
        }
    };

    public relateProductAndTagsId = async (productId: number, tagId: number): Promise<void> => {
        try {
            await Database.connection
            .insert({
                product_id: productId,
                tag_id: tagId
            })
            .into(ProductDatabase.RELATION_TABLE_NAME);

        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.sqlMessage || error.message);
        }
    };
};