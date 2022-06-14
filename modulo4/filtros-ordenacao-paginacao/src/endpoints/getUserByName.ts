import { Request, Response } from "express";
import { selectUserByName } from "../data/selectUserByName";

export const getUserByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.query;

        const user = await selectUserByName(name as string);

        res.status(200).send(user);

    } catch (error: any) {
        res.status(res.statusCode).send(error.sqlMessage || error.message);
    }
};