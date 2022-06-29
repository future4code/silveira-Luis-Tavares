import { Request, Response } from "express";
import { selectTaskById } from "../data/selectTaskById";

export const getTaskById = async (req: Request, res: Response) => {
    const {id} = req.params;
    const result = await selectTaskById(+id);

    try {
        if(!id) {
            res.statusCode = 422;
            throw new Error("Cheque os params e tente novamente");
        }

        if(typeof id !== "string") {
            res.statusCode = 400;
            throw new Error("Valor de propriedade 'id' inválida");
        }

        res.status(200).send(result);

    } catch(error: any) {
        res.status(res.statusCode).send(error.sqlMessage || error.message);
    }
};