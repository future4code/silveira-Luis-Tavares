// ATIVIDADE 1 - A) usamos o process.argv[2]

// ATIVIDADE 1 - B)

// ------- RESPOSTA 1b ------- 
const myName = process.argv[2];
const myAge = Number(process.argv[3]);
const myAgePlusSeven = process.argv[3] + 7;

console.log(`Olá, ${myName}! Você tem ${myAge} anos. Em sete anos você terá ${myAgePlusSeven}`);