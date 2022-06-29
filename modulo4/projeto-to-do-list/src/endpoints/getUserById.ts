import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";

export const getUserById = async (req: Request, res: Response) => {
    const {id} = req.params;
    const result = await selectUserById(+id);

    try {
        if(!id) {
            res.statusCode = 422;
            throw new Error("Cheque os campos e tente novamente");
        }

        if(typeof id !== "string") {
            res.statusCode = 400;
            throw new Error("Valor de propriedade 'id' inválida");
        }

        if(result.length === 0) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado");
        }
        
        res.status(200).send(result);
        
    } catch(error: any) {
        res.status(res.statusCode).send(error.sqlMessage || error.message);
    }
};