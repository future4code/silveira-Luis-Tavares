import { compareSync, genSaltSync, hash, hashSync } from "bcryptjs";

export class HashManager {
    generateHash = async (s: string): Promise<string> => {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await genSaltSync(rounds);
        const result = await hashSync(s, salt);

        return result;
    };

    compareHash = async (s: string, hash: string): Promise<boolean> => compareSync(s, hash);
};