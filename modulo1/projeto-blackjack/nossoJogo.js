/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


let cartasUsuario = [];
let cartasComputador = [];
let pontuacaoUsuario;
let pontuacaoComputador;

function iniciarJogo() {
   console.log("Boas vindas ao jogo de Blackjack!");

   while(confirm("Você quer começar uma nova rodada?")) {

         cartasUsuario = [comprarCarta(), comprarCarta()];
         cartasComputador = [comprarCarta(), comprarCarta()];

      pontuacaoUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor;
      pontuacaoComputador = cartasComputador[0].valor + cartasComputador[1].valor;

      console.log(`Usuário - cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} - pontuação ${pontuacaoUsuario}`);
      console.log(`Computador - cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto} - pontuação ${pontuacaoComputador}`);

      if(pontuacaoUsuario > pontuacaoComputador) 
         console.log("O usuário ganhou!");
      else if(pontuacaoComputador > pontuacaoUsuario)
         console.log("O computador ganhou!");
      else
         console.log("Empate!");
      
   }
      console.log("O jogo acabou.");
}

iniciarJogo();