enum Section {
    MARKETING = "Marketing",
    SALES = "Vendas",
    FINANCIAL = "Financeiro"
};

type Employees = {
    name: string,
    salary: number,
    section: string,
    presential: boolean
};

const allEmployees: Array<Employees> = [
	{ name: "Marcos", salary: 2500, section: Section.MARKETING, presential: true },
	{ name: "Maria" ,salary: 1500, section: Section.SALES, presential: false},
	{ name: "Salete" ,salary: 2200, section: Section.FINANCIAL, presential: true},
	{ name: "João" ,salary: 2800, section: Section.MARKETING, presential: false},
	{ name: "Josué" ,salary: 5500, section: Section.FINANCIAL, presential: true},
	{ name: "Natalia" ,salary: 4700, section: Section.SALES, presential: true},
	{ name: "Paola" ,salary: 3500, section: Section.MARKETING, presential: true }
];

const getPresentialMarketingEmployees = (array: Array<Employees>): Array<Employees> => {
    const filteredEmployees: Array<Employees> = array.filter((employe: Employees) => {
        return employe.section === Section.MARKETING && employe.presential === true;
    });

    return filteredEmployees;
};

console.log(getPresentialMarketingEmployees(allEmployees));
