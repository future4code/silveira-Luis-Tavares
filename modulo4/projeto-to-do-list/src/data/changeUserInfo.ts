import { User } from "../types";
import { connection } from "./dataBase";

export const changeUserInfo = async (id: number, name: string, nickname: string) => {
    return await connection("ToDoListUser").update({name, nickname}).where({id});
};