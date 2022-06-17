import { Request, Response } from "express";
import { insertProduct } from "../data/insertProduct";

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, price, image_url } = req.body;

        if(name === "" || image_url === "") {
            res.statusCode = 422;
            throw new Error("Insira valores válidos");
        }

        if(price <= 0) {
            res.statusCode = 422;
            throw new Error("Valor de produto inválido");
        }

        await insertProduct(name, price, image_url);

        res.status(201).send("Produto criado com sucesso");

    } catch (error: any) {
        res.status(res.statusCode !== 200 ? res.statusCode : 500).send(error.sqlMessage || error.message);
    }
};