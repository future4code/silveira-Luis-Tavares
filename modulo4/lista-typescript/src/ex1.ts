const apresentation = (name: string, birthDate: string): string => {
    const date = birthDate.split("/");
    return `Olá me chamo ${name}, nasci no dia ${date[0]} do mês ${date[1]} do ano de ${date[2]}`;
};

console.log(apresentation("Luis", "30/06/2000"));