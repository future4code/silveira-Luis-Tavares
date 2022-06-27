import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

import { IdGenerator } from "../services/IdGenerator";

export class UserController {
    public createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;
            
            if(!email || email.indexOf("@") === -1) {
                res.statusCode = 422;
                throw new Error("Email inválido");
            }

            if(!password || password.length < 6) {
                res.statusCode = 422;
                throw new Error("Senha inválida");
            }

            const id = new IdGenerator().generateId();

            await new UserDatabase().insertUser(id, email, password);

            const token = new Authenticator().generateToken({ id });

            res.status(201).send({ message: "Token gerado pelo JWT", token });
            
        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send({ message: error.sqlMessage || error.message });
        }
    };

    public userLogin = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;

            if(!email || email.indexOf("@") === -1) {
                res.statusCode = 422;
                throw new Error("Email inválido");
            }

            const user = await new UserDatabase().selectUserByEmail(email);

            if(password !== user.password) {
                res.statusCode = 401;
                throw new Error("Senha inválida");
            }

            const token = new Authenticator().generateToken({ id: user.id });

            res.status(200).send({ message: "Token gerado pelo JWT", token });

        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send({ message: error.sqlMessage || error.message });
        }
    };

    public getUserById = async (req: Request, res: Response): Promise<void> => {
        try {
            const token = req.headers.authorization as string;
            const authenticationData = new Authenticator().getData(token);

            const user = await new UserDatabase().selectUserById(authenticationData.id);

            res.status(200).send({ id: user.id, email: user.email });

        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send({ message: error.sqlMessage || error.message });
        }
    };
};