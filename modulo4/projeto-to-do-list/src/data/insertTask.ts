import { connection } from "./dataBase";

export const insertTask = async (title: string, description: string, status: string, limitDate: string, creatorUserId: number) => {
    return connection("ToDoListTask").insert({
        title,
        description,
        status,
        limit_date: limitDate,
        creator_user_id: creatorUserId
    });
};