import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { User } from "../models/User";

export class UserController {
    constructor (
        private userBusiness: UserBusiness
     ) {};

    public getUserById = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId: string = req.params.id as any;

            const user: User = await this.userBusiness.getUserById(userId);

            res.status(200).send({ user });
            
        } catch (error: any) {
            res.status(res.statusCode || 400).send(error.message);
        }
    };
};