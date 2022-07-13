import { CustomError } from "../errors/CustomError";
import { User } from "../models/User";
import { Database } from "./Database";

export class UserDatabase extends Database {
    private TABLE_NAME = "User_Arq";

    public selectUserById = async (userId: string): Promise<User | undefined> => {
        try {
            const [user] = await this.getConnection()
            .select()
            .from(this.TABLE_NAME)
            .where({ userId });

            return User.toUserModel(user);

        } catch (error: any) {
            throw new CustomError(404, "Erro ao buscar usuário por ID no banco de dados");
        }
    };
};