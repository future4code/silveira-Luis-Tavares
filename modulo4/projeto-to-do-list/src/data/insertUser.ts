import { connection } from "./dataBase";

export const insertUser = async (name: string, nickname: string, email: string) => {
    return await connection("ToDoListUser").insert({
        name,
        nickname,
        email
    });
};