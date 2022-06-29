import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { RecipeModel } from "../models/RecipeModel";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class RecipeController {
    public createRecipe = async (req: Request, res: Response) => {
        try {
            const { title, description, creationDate } = req.body;
            const token = req.headers.authorization;

            if (!title || !description || !creationDate) {
                res.statusCode = 400;
                throw new Error("Preencha as informações de acordo com o body requisitado");
            }

            if (!token) {
                res.statusCode = 400;
                throw new Error("Token deve ser informado");
            }

            const tokenInfo = new Authenticator().getTokenInfos(token);

            if (!tokenInfo) {
                res.statusCode = 404;
                throw new Error("Token inválido");
            }

            const convertedDate = creationDate.split("/").reverse().join("-");
            const id = new IdGenerator().generateId();
            const recipe = new RecipeModel(id, title, description, convertedDate);
            
            await new RecipeDatabase().insertRecipe(recipe, tokenInfo.id);

            res.status(201).send({ message: "Receita criada com sucesso" });

        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send(error.sqlMessage || error.message);
        }
    };
};