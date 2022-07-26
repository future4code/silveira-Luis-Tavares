import { Database } from "./Database";

import { TagDTO } from "../interfaces/Tag";

import { CustomError } from "../errors/CustomError";

import { Product } from "../models/Product";
import { Tag } from "../models/Tag";
import { ProductDB } from "../interfaces/Product";

export class ProductDatabase extends Database {
    private static PRODUCT_TABLE_NAME = "amaro_products";
    private static TAG_TABLE_NAME = "amaro_tags";
    private static RELATION_TABLE_NAME = "amaro_products_tags";

    public insertProduct = async (newProduct: ProductDB, tags: TagDTO[]): Promise<void> => {
        try {
            await Database.connection
            .insert({
                name: newProduct.name
            })
            .into(ProductDatabase.PRODUCT_TABLE_NAME);

            await this.insertTags(tags);

            tags.forEach(async (tagName: TagDTO): Promise<void> => {
                const product = await this.selectProductByName(newProduct.name);
                const tag = await this.selectTagByName(tagName);

                await this.relateProductAndTagsId(product!.id, tag!.id);
            });

        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage);
        }
    };

    public insertTags = async (tags: TagDTO[]): Promise<void> => {
        try {
            tags.forEach(async (tag: TagDTO): Promise<void> => {
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

    public selectTagByName = async (name: TagDTO): Promise<Tag | undefined> => {
        try {
            const [tag] = await Database.connection
            .select()
            .from(ProductDatabase.TAG_TABLE_NAME)
            .where({ name });

            return tag;
            
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    };

    public selectProductByName = async (name: string): Promise<Product | undefined> => {
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