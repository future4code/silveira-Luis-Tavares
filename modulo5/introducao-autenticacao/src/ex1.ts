import { v4 } from "uuid";

const id = v4();

console.log("generated id:", id);

// A) acredito que sim, pois string pode obter diferentes tipos de caractéres e assim tornar o token mais seguro. 
// B) ./services/IdGenerator.ts