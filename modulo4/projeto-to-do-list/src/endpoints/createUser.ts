import {Request, Response } from "express";
import { insertUser } from "../data/insertUser";

export const createUser = async (req: Request, res: Response) => {
    const {name, nickname, email} = req.body;

    try {
        if(!name || !nickname || !email) {
            res.statusCode = 422;
            throw new Error("Cheque os campos e tente novamente");
        }

        if(typeof name !== "string") {
            res.statusCode = 400;
            throw new Error("Valor de propriedade 'name' inválida");
        }

        if(typeof nickname !== "string") {
            res.statusCode = 400;
            throw new Error("Valor de propriedade 'nickname' inválida");
        }

        if(typeof email !== "string") {
            res.statusCode = 400;
            throw new Error("Valor de propriedade 'email' inválida");
        }

        await insertUser(name, nickname, email);
        res.status(201).send({message: "Usuário criado com sucesso"});

    } catch(error: any) {
        res.status(res.statusCode).send(error.sqlMessage || error.message);
    }
};