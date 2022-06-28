import { Request, response, Response } from "express";
import { insertAddress } from "../data/insertAddress";
import { getAddress } from "./getAddress";

export const createAddress = async (req: Request, res: Response): Promise<void> => {
    try {
        let { cep, numero, complemento } = req.body;
        
        if(!cep || !numero) {
            res.statusCode = 422;
            throw new Error("Cheque os campos e tente novamente");
        }
        
        if(!complemento) {
            complemento = "";
        }
        
        if(typeof numero !== "number") {
            res.statusCode = 422;
            throw new Error("Número inválido");
        }

        const address = await getAddress(cep, numero, complemento);
        
        if(!address) {
            throw new Error("CEP inválido");
        }

        await insertAddress(address);
        res.status(201).send("Endereço cadastrado com sucesso.");

    } catch (error: any) {
        res.status(res.statusCode !== 200 ? res.statusCode : 500).send(error.sqlMessage || error.message);
    }
};