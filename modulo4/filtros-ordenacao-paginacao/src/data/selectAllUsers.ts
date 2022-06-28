import { connection } from "./database";

export const selectAllUsers = async (sort: string, order: string, offset: number): Promise<any> => {
    const result = await connection.raw(`
        SELECT id, name, email, type
        FROM aula49_exercicio
        ORDER BY ${sort} ${order}
        LIMIT 5
        OFFSET ${offset};
    `);
    console.log(result)
    return result[0];
};