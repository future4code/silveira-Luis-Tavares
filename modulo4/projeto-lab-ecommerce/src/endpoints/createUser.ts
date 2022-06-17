import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body;

        if(name === "" || email === "" || password === "") {
            res.statusCode = 422;
            throw new Error("Insira valores válidos");
        }

        await insertUser(name, email, password);

        res.status(201).send("Usuário criado com sucesso.");

    } catch (error: any) {
        res.status(res.statusCode !== 200 ? res.statusCode : 500).send(error.sqlMessage || error.message);
    }
};