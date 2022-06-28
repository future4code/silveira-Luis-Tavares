import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

import { IdGenerator } from "../services/IdGenerator";
import { User, USER_ROLES } from "../types";

export class UserController {
    public createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;
            const role: USER_ROLES = req.body.role;

            if(!email || email.indexOf("@") === -1) {
                res.statusCode = 422;
                throw new Error("Email inválido");
            }

            if(!password || password.length < 6) {
                res.statusCode = 422;
                throw new Error("Senha inválida");
            }

            if(role !== USER_ROLES.ADMIN && role !== USER_ROLES.NORMAL) {
                res.statusCode = 422;
                throw new Error("Tipo de usuário deve ser NORMAL ou ADMIN");
            }

            const id = new IdGenerator().generateId();

            const hashManager = new HashManager();

            const cypherPassword = await hashManager.generateHash(password);

            await new UserDatabase().insertUser(id, email, cypherPassword, role);

            const token = new Authenticator().generateToken({ id, role });

            res.status(201).send({ message: "Usuário criado com sucesso", token });

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

            const user: User = await new UserDatabase().selectUserByEmail(email);

            const checkPassword = new HashManager().compareHash(password, user.password);

            if(!checkPassword) {
                res.statusCode = 401;
                throw new Error("Senha inválida");
            }

            const token = new Authenticator().generateToken({ id: user.id, role: user.role });

            res.status(200).send({ message: "Token gerado pelo JWT", token });

        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send({ message: error.sqlMessage || error.message });
        }
    };

    public getUserById = async (req: Request, res: Response): Promise<void> => {
        try {
            const token = req.headers.authorization as string;
            const authenticationData = new Authenticator().getData(token);

            if(authenticationData.role !== "NORMAL") {
                res.statusCode = 403;
                throw new Error("Apenas usuários normais podem acessar esta funcionalidade");
            }

            const user = await new UserDatabase().selectUserById(authenticationData.id);

            res.status(200).send({ id: user.id, email: user.email });

        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send({ message: error.sqlMessage || error.message });
        }
    };
};