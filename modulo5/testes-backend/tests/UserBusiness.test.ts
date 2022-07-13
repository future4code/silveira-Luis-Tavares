import { UserBusiness } from "../src/business/UserBusiness";
import { UserDatabase } from "../src/data/UserDatabase";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";

const userBusinessMock = new UserBusiness(
    new UserDatabaseMock() as UserDatabase
);

describe("Testando getUserById", () => {
    test("Deve retornar erro para usuário inexistente", async () => {
        try {
            await userBusinessMock.getUserById("id_inexistente");

        } catch (error: any) {
            expect(error.statusCode).toBe(422);
            expect(error.message).toEqual("Por favor, insira um id");
            
        } finally {
            expect.assertions(2);
        }
    });
});