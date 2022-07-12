import { Character } from "./interfaces";
import { validateCharacter } from "./validateCharacter";

export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
) => {
    if (
        !validator(attacker) ||
        !validator(defender)
    ) {
        throw new Error("Invalid Character");
    }

    if (attacker.strength > defender.defense) {
        defender.health = defender.health - (attacker.strength - defender.defense); 
    }
};

// 3 - C) acredito que a leitura da função fica com melhor compreendimento
//  e que seja vantajoso implementar a inversão de dependências pois podemos passar qualquer função de validação desejada por parâmetro