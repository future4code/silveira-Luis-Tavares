import { Request, Response } from "express";
import { selectUsers } from "../data/selectUsers";
import { User } from "../types";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: Array<User> = await selectUsers();

        res.status(200).send(users);

    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
};