import * as bcrypt from "bcryptjs";

export class HashManager {
    public async generateHash(password: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        const hashedPassword = bcrypt.hash(password, salt);

        return hashedPassword;
    };

    public async compareHash(
        password: string,
        hashedPassword: string
    ): Promise<boolean> {
        return await bcrypt.compare(
            password,
            hashedPassword
        );
    };
};