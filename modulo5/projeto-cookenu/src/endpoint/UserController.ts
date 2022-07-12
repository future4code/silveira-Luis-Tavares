import { Request, Response } from "express";

import { UserDatabase } from "../data/UserDatabase";
import { UserModel } from "../models/UserModel";

import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserController {
    public createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const { name, email, password } = req.body;

            if (!email || email.indexOf("@") == -1) {
                res.statusCode = 412;
                throw new Error("Email inválido");
            }

            if (!name || name.length <= 2) {
                res.statusCode = 412;
                throw new Error("Nome inválido");
            }
            
            if (!password || password.length < 6) {
                res.statusCode = 412;
                throw new Error("Senha inválida");
            }

            const id = new IdGenerator().generateId();
            const hashPassword = await new HashManager().generateHash(password);
            const token = new Authenticator().generateToken({ id });

            const user = new UserModel(id, name, email, hashPassword);

            await new UserDatabase().insertUser(user);
            
            res.status(201).send({ message: "Usuário criado com sucesso", token });

        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send(error.sqlMessage || error.message);
        }
    };

    public logIn = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;

            if (!email || email.indexOf("@") == -1) {
                res.statusCode = 412;
                throw new Error("Email inválido");
            }

            if (!password) {
                res.statusCode = 400;
                throw new Error("Insira a senha");
            }

            const user = await new UserDatabase().selectUserByEmail(email);
            const isPasswordCorrect = await new HashManager().compareHash(password, user.getPassword());

            if (!isPasswordCorrect) {
                res.statusCode = 403;
                throw new Error("Senha incorreta");
            }

            const token = new Authenticator().generateToken({ id: user.getId() });

            res.status(200).send({ message: "Login realizado com sucesso", token });

        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send(error.sqlMessage || error.message);
        }
    };

    public getUserInfos = async (req: Request, res: Response): Promise<void> => {
        try {
            const token = req.headers.authorization;

            if (!token) {
                res.statusCode = 400;
                throw new Error("Token deve ser informado");
            }

            const tokenInfo = new Authenticator().getTokenInfos(token);

            if (!tokenInfo) {
                res.statusCode = 404;
                throw new Error("Token inválido");
            }

            const userInfos = await new UserDatabase().selectUserById(tokenInfo.id);

            res.status(200).send({ id: userInfos.getId(), email: userInfos.getEmail() });

        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send(error.sqlMessage || error.message);
        }
    };

    public followUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const { userToFollowId } = req.body;
            const token = req.headers.authorization;

            const userId = await new UserDatabase().selectUserById(userToFollowId);

            if (!userToFollowId || !userId) {
                res.statusCode = 400;
                throw new Error("Id inválido ou inexistente");
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

            if (tokenInfo.id === userToFollowId) {
                res.statusCode = 405;
                throw new Error("Não é possível seguir a si mesmo");
            }

            await new UserDatabase().insertFollow(tokenInfo.id, userToFollowId);

            res.status(201).send({ message: "Usuário seguido com sucesso" });

        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send(error.sqlMessage || error.message);
        }
    };

    public showUserFeed = async (req: Request, res: Response): Promise<void> => {
        try {
            const token = req.headers.authorization;

            if (!token) {
                res.statusCode = 400;
                throw new Error("Token deve ser informado");
            }

            const tokenInfo = new Authenticator().getTokenInfos(token);

            if (!tokenInfo) {
                res.statusCode = 404;
                throw new Error("Token inválido");
            }


        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send(error.sqlMessage || error.message);
        }
    };
};