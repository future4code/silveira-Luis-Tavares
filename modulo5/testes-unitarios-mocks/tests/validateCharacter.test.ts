import { Character } from "../src/interfaces";
import { validateCharacter } from "../src/validateCharacter";

describe("Testing function validateCharacter", () => {
    test("should return false for empty name", () => {
        const character: Character = {
            name: "",
            health: 150,
            defense: 100,
            strength: 100
        };

        const result = validateCharacter(character);

        expect(result).toBe(false);
    });

    test("should return false for health value equal 0", () => {
        const character: Character = {
            name: "Luis",
            health: 0,
            defense: 100,
            strength: 100
        };

        const result = validateCharacter(character);

        expect(result).toBe(false);
    });

    test("should return false for strength value equal 0", () => {
        const character: Character = {
            name: "Luis",
            health: 100,
            defense: 100,
            strength: 0
        };

        const result = validateCharacter(character);

        expect(result).toBe(false);
    });

    test("should return false for defense value equal 0", () => {
        const character: Character = {
            name: "Luis",
            health: 100,
            defense: 0,
            strength: 100
        };

        const result = validateCharacter(character);

        expect(result).toBe(false);
    });

    test("should return false for negative status value", () => {
        const character: Character = {
            name: "Luis",
            health: 100,
            defense: 100,
            strength: -100
        };

        const result = validateCharacter(character);

        expect(result).toBe(false);
    });

    test("should return true for all valids inputs", () => {
        const character: Character = {
            name: "Luis",
            health: 100,
            defense: 100,
            strength: 100
        };

        const result = validateCharacter(character);

        expect(result).toBe(true);
    });
});