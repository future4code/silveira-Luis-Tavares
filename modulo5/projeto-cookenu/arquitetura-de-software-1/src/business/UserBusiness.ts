import { UserDatabase } from "../data/UserDatabase";

import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

import { User, userSignUp, UserLogin, InputDelete } from "../types/user";

export class UserBusiness {
    public async createUser(user: userSignUp): Promise<string> {
        try {
            const { name, email, password, role } = user;

            if (
                !name ||
                !email ||
                !password ||
                !role
            ) {
                throw new Error("Por favor, preencha os campos");
            }

            if (email.indexOf("@") === -1) {
                throw new Error("Email inválido");
            }

            if (password.length < 6) {
                throw new Error("Senha inválida");
            }

            const id = new IdGenerator().generateId();
            const hashPassword = await new HashManager().generateHash(password);
            await new UserDatabase().insertUser({
                id,
                name,
                email,
                password: hashPassword,
                role
            });
            const token = new Authenticator().generateToken({ id, role });

            return token;

        } catch (error: any) {
            throw new Error(error.message || "Erro criando usuário");
        }
    };

    public async getUserByEmail(user: UserLogin): Promise<string> {
        try {
            const { email, password } = user;

            if (
                !email ||
                !password
            ) {
                throw new Error("Por favor, preencha os campos");
            }

            if (email.indexOf("@") === -1) {
                throw new Error("Email inválido");
            }

            if (password.length < 6) {
                throw new Error("Senha inválida");
            }

            const userData: User = await new UserDatabase().selectUserByEmail(email);
            const hashCompare = await new HashManager().compareHash(password, userData.password);

            if (!hashCompare) {
                throw new Error("Senha incorreta");
            }
            
            const token = new Authenticator().generateToken({ id: userData.id, role: userData.role });

            return token;

        } catch (error: any) {
            throw new Error(error.message || "Erro ao logar usuário");
        }
    };

    public async getUsers(token: string): Promise<User[]> {
        try {

            if (!token) {
                throw new Error("Token inválido");
            }

            const verifiedToken = new Authenticator().getTokenData(token);

            if(!verifiedToken) {
                throw new Error("Token inexsitente");
            }                  

            const users: Array<User> = await new UserDatabase().selectAllUsers();
            
            return users;

        } catch (error: any) {
            throw new Error(error.message || "Erro ao listar usuários");
        }
    };

    public async deleteUser(input: InputDelete): Promise<void> {
        try {
            const { id, token } = input;

            const verifiedToken = new Authenticator().getTokenData(token);

            if(!verifiedToken) {
                throw new Error("Token inexsitente");
            }

            if (verifiedToken.role !== "ADMIN") {
                throw new Error("Usuário não possui permissão para deletar usuários");
            }

            await new UserDatabase().deleteUserById(id);
            
        } catch (error: any) {
            throw new Error(error.message || "Erro ao deletar usuário");
        }
    };
};