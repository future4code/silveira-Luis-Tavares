import { connection } from "./database";

export const insertProduct = async (name: string, price: string, image_url: string): Promise<void> => {
    await connection("LabEcommerce_Products").insert({
        name,
        price,
        image_url
    });
};