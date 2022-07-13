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
            expect(error.statusCode).toBe(404);
            expect(error.message).toBe("Usuário inexistente");

        } finally {
            expect.assertions(2);
        }
    });

    test("Deve retornar usuário para id preenchido de forma correta", async () => {
        try {
            const getUserById = jest.fn(
                (id: string) => userBusinessMock.getUserById(id)
              );
                
              const user = await getUserById("id_usermock_1")

            expect(getUserById).toHaveBeenCalledWith("id_usermock_1");
            expect(user).toEqual({
                id: "id_usermock_1",
                name: "user1",
                email: "user1@gmail.com",
                password: "user1password",
                role: "NORMAL"
            });
            
        } catch (error: any) {
            console.log(error.message);
        } finally {
            expect.assertions(2);
        }
    });
});