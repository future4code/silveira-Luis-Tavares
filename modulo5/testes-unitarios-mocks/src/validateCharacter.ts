import { Character } from "./interfaces";

export const validateCharacter = (input: Character): boolean => {
    if (
        !input.name ||
        input.health === undefined ||
        input.defense === undefined ||
        input.strength === undefined
    ) {
        return false;
    }

    if (
        input.health <= 0 ||
        input.defense <= 0 ||
        input.strength <= 0
    ) {
        return false;
    }

    return true;
};