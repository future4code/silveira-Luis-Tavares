import { Request, Response } from "express";
import { insertTask } from "../data/insertTask";

export const createTask = async (req: Request, res: Response) => {
    const {title, description, status, limitDate, creatorUserId} = req.body;
    const dateFormated = limitDate.split("/").reverse().join("-");
    
    try {
        if(!title || !description || !limitDate || !creatorUserId) {
            res.statusCode = 422;
            throw new Error("Cheque os campos e tente novamente");
        }

        await insertTask(title, description, status, dateFormated, creatorUserId);
        res.status(201).send("Tarefa criada com sucesso");

    } catch(error: any) {
        res.status(res.statusCode).send(error.sqlMessage || error.message);
    }
};