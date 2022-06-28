import { Request, Response } from "express";
import { selectUserByType } from "../data/selectUserByType";

export const getUserByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const { type } = req.params;

        const users = await selectUserByType(type);

        res.status(200).send(users);

    } catch (error: any) {
        res.status(res.statusCode).send(error.sqlMessage || error.message);
    }
};