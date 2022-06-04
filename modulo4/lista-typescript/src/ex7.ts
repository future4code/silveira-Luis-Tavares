type Product = {
    name: string,
    quantity: number,
    unitaryValue: number | string
};

const inventory: Array<Product> = [
	{ name: "MacMugffin", quantity: 37, unitaryValue: 51.040},
	{ name: "Vassoura voadora", quantity: 56, unitaryValue: 210.0},
	{ name: "Laço da verdade", quantity: 32, unitaryValue: 571.5},
	{ name: "O precioso", quantity: 1, unitaryValue: 9181.923},
	{ name: "Caneta de 250 cores", quantity: 123, unitaryValue: 17},
	{ name: "Plumbus", quantity: 13, unitaryValue: 140.44},
	{ name: "Pokebola", quantity: 200, unitaryValue: 99.9915}
];

const adjustPrice = (price: number): string => {
	const adjustedValue: string = price.toFixed(2).replace('.', ',');
	return "R$ " + adjustedValue;
};

const updatePricesList = (array: Array<Product>): Array<Product> => {
    array.map((product) => {
        product.unitaryValue = adjustPrice(product.unitaryValue as number);
    });

    return array.sort((first, second) => first.quantity - second.quantity);
};

console.log(updatePricesList(inventory));