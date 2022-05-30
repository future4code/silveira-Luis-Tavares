// ATIVIDADE 2

// ------- RESPOSTA 2 ------- 
const mathOps = (operation) => {
    switch(operation) {
        case "add":
            return Number(process.argv[3]) + Number(process.argv[4]);
        case "sub":
            return Number(process.argv[3]) - Number(process.argv[4]);
        case "mult":
            return Number(process.argv[3]) * Number(process.argv[4]);
        case "div":
            return Number(process.argv[3]) / Number(process.argv[4]);
    };
};

console.log("Resposta:", mathOps(process.argv[2]));
