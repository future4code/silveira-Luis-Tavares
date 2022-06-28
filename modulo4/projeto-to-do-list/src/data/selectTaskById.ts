import { connection } from "./dataBase";

export const selectTaskById = async (id: number) => {
    const task = await connection("ToDoListTask").select("*").where({id});
    const userId = task[0].creator_user_id;

    const userCreator = await connection("ToDoListUser").select("nickname").where({id: userId});

    const FormatedLimitDate = new Date(task[0].limit_date).toISOString().substring(0, 10).split("-").reverse().join("/");
    const finalResult = {...task[0], limit_date: FormatedLimitDate, creatorUserNickname: userCreator[0].nickname};

    return finalResult;
};