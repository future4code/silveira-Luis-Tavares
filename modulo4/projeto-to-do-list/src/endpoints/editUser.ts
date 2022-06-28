import { Request, Response } from "express";
import { changeUserInfo } from "../data/changeUserInfo";

export const editUser = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {name, nickname} = req.body;
    await changeUserInfo(+id, name, nickname);

    try {
        if(!id) {
            res.statusCode = 422;
            throw new Error("Cheque os params e tente novamente");
        }

        if(name === "") {
            res.statusCode = 400;
            throw new Error("Valor da propriedade 'name' inválida");
        }

        if(nickname === "") {
            res.statusCode = 400;
            throw new Error("Valor da propriedade 'nickname' inválida");
        }

        res.status(200).send({message: "Usuário editado com sucesso"});

    } catch(error: any) {
        res.status(res.statusCode).send(error.sqlMessage || error.message);
    }
};