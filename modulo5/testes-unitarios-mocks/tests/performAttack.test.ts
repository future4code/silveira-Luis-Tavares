import { Character } from "../src/interfaces";
import { performAttack } from "../src/performAttack";

describe("Testing function performAttack", () => {
    test("should perform attack", () => {
        const validatorMock = jest.fn(() => true);

        const attacker: Character = {
            name: "luis",
            health: 150,
            defense: 80,
            strength: 300
        };

        const defender: Character = {
            name: "alias",
            health: 400,
            defense: 100,
            strength: 500
        };

        performAttack(attacker, defender, validatorMock);

        expect(defender.health).toEqual(200);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
    });

    test("should perform attack", () => {
        const validatorMock = jest.fn(() => false);

        const attacker: Character = {
            name: "luis",
            health: 150,
            defense: 80,
            strength: 300
        };

        const defender: Character = {
            name: "alias",
            health: 0,
            defense: 100,
            strength: 500
        };

        try {
            performAttack(attacker, defender, validatorMock);
        } catch (error: any) {
            expect(error.message).toBe("Invalid Character");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);
        }
    });
});