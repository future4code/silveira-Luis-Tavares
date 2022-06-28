import { connection } from "./database";

export const selectUserByName = async (name: string) => {
    const result = await connection.raw(`
        SELECT id, name, email, type
        FROM aula49_exercicio
        WHERE name LIKE "%${name}%"; 
    `);

    return result[0];
};