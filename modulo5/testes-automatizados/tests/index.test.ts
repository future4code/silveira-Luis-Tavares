import { performPurchase } from "../src";
import { User } from "../src/types";

describe("Testando index.ts", () => {
    
    test("testando valor de saldo maior que de compra", () => {
        const user: User = {
            name: "Luis",
            balance: 200
        };

        const result = performPurchase(user, 50);

        expect(result).toEqual({
            name: "Luis",
            balance: 150
        });
    });

    test("testando valor de saldo igual ao de compra", () => {
        const user: User = {
            name: "Luis",
            balance: 200
        };

        const result = performPurchase(user, 200);

        expect(result).toEqual({
            name: "Luis",
            balance: 0
        });
    });

    test("testando valor de saldo igual ao de compra", () => {
        const user: User = {
            name: "Luis",
            balance: 200
        };

        const result = performPurchase(user, 250);

        expect(result).not.toBeDefined();
    });
});