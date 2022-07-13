import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../errors/CustomError";
import { User } from "../models/User";

export class UserBusiness {
    constructor (
        private userDatabase: UserDatabase
    ) {};

    public getUserById = async (userId: string): Promise<User> => {
        try {
            if (!userId) {
                throw new CustomError(422, "Por favor, insira um id");
            }

            const user: User | undefined = await this.userDatabase.selectUserById(userId);

            if (!user) {
                throw new CustomError(404, "Usuário inexistente");
            }

            return user;
            
        } catch (error: any) {
            throw new CustomError(404, "Usuário não encontrado");
        }
    };
};