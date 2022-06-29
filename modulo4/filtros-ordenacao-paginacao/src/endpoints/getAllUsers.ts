import { Request, Response } from "express";
import { selectAllUsers } from "../data/selectAllUsers";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        let { sort, order } = req.query;
        let actualPage = Number(req.query.page);
        let offset = 5 * (actualPage - 1);
        
        if(sort == undefined) {
            sort = "email";
        }
        
        if(order == undefined) {
            order = "DESC";
        }

        if(actualPage < 1 || isNaN(actualPage)) {
            actualPage = 1;
        }

        const users = await selectAllUsers(sort as string, order as string, Number(actualPage));
        
        if(!users.length) {
            res.statusCode = 404;
            throw new Error("No users found");
        }
        
        res.status(200).send(users);

    } catch (error: any) {
        res.status(res.statusCode).send(error.sqlMessage || error.message);      
    }
};