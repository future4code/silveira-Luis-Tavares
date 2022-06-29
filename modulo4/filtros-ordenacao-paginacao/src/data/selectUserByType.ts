import { connection } from "./database";

export const selectUserByType = async (type: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT id, name, email, type
        FROM aula49_exercicio
        WHERE type = "${type}";
    `);

    return result[0];
}; 