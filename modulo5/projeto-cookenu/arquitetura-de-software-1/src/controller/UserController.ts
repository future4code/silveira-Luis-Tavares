import { Request, Response } from "express";

import { UserBusiness } from "../business/UserBusiness";

import { InputDelete, User, UserLogin, userSignUp } from "../types/user";

export class UserController {
    public async signup(req: Request, res: Response): Promise<void> {
        try {
            const input: userSignUp = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            };

            const token: string = await new UserBusiness().createUser(input);

            res.status(201).send({ token });

        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send({ error: error.message });
        }
    };

    public async login(req: Request, res: Response): Promise<void> {
        try {
            const input: UserLogin = {
                email: req.body.email,
                password: req.body.password
            };

            const token: string = await new UserBusiness().getUserByEmail(input);

            res.status(200).send({ token });

        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send({ error: error.message });
        }
    };

    public async getUsers(req: Request, res: Response): Promise<void> {
        try {
            const token: string = req.headers.authorization as string;
            const users: Array<User> = await new UserBusiness().getUsers(token);

            res.status(200).send({ message: users });

        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send({ error: error.message });
        }
    };

    public async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const input: InputDelete = {
                id: req.params.id as string,
                token: req.headers.authorization as string
            };

            await new UserBusiness().deleteUser(input);

            res.status(200).send({ message: "Usuário deletado com sucesso" });

        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send({ error: error.message });
        }
    };
};