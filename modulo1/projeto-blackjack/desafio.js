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
let somaPontuacaoUsuario = 0;
let somaPontuacaoComputador = 0;

function iniciarJogo() {
   console.log("Boas vindas ao jogo de Blackjack!");

   cartasUsuario = [comprarCarta(), comprarCarta()];
   cartasComputador = [comprarCarta(), comprarCarta()];

   if()
}