import { connection } from "./dataBase";

export const selectUserById = async (id: number) => {
    const result = await connection("ToDoListUser").select("*").where({id});
    return result[0];
};