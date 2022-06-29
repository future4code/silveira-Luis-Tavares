import * as bcrypt from "bcryptjs";

export class HashManager {
    public generateHash = async (password: string): Promise<string> => {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        
        return bcrypt.hash(password, salt);
    };

    public compareHash = async (password: string, hash: string): Promise<boolean> => await bcrypt.compare(password, hash);
};