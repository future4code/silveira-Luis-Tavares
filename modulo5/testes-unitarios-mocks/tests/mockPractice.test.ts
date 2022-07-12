// 4 - A) performAttack, pois ela recebe a implementação de validação atráves do parâmetro, e utilizaremos um mock para simular a validação

test("showing valid mock from performAttack", () => {
    jest.fn(() => true);
});

test("showing invalid mock from performAttack", () => {
    jest.fn(() => false);
});