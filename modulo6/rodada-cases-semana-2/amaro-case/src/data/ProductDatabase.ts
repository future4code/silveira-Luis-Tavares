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

            tags.forEach(async (tagName: string): Promise<void> => {
                const product = await this.selectProductByExactName(newProduct.name);
                const tag = await this.selectTagByName(tagName);

                product && tag && await this.relateProductAndTagsId(product.id, tag.id);
            });

        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage);
        }
    };

    public insertTags = async (tags: string[]): Promise<void> => {
        try {
            tags.forEach(async (tag: string): Promise<void> => {
                const tagAlreadyExists = await this.selectTagByName(tag);

                if (!tagAlreadyExists) {
                    await Database.connection
                    .insert({ 
                        name: tag
                     })
                    .into(ProductDatabase.TAG_TABLE_NAME);
                }
            });
            
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    };

    public selectTagByName = async (name: string): Promise<any> => {
        try {
            const tag = await Database.connection
            .select()
            .from(ProductDatabase.TAG_TABLE_NAME)
            .where({ name });

            console.log(tag);
            

            // return tag;
            
        } catch (error: any) {
            throw new CustomError(400, error.message || error.sqlMessage);
        }
    };

    public selectProductByExactName = async (name: string): Promise<Product> => {
        try {
            const [product] = await Database.connection
            .select()
            .from(ProductDatabase.PRODUCT_TABLE_NAME)
            .where({ name });

            return product;
            
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    };

    public selectProductByKeyword = async (name: string): Promise<Product[] | Product> => {
        try {
            const [products] = await Database.connection
            .select()
            .from(ProductDatabase.PRODUCT_TABLE_NAME)
            .whereLike("name", `%${name}%`);

            if (!products) {
                throw new CustomError(404, "Produto(s) não encontrado");            
            }

            return products;

        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
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
            throw new CustomError(400, error.sqlMessage);
        }
    };

    public selectProductByTags = async (tagNames: string[]): Promise<any> => {
        try {
            const array = tagNames.map( async (name: string) => {
                return await Database.connection
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
                .where("amaro_tags.name", name)
            });

            const results = await Promise.all(array);

            // console.log(results);
            


        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
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
            throw new CustomError(400, error.sqlMessage);
        }
    };
};