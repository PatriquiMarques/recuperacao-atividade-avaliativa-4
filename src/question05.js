// Questão 05
// Você deve desenvolver um programa para verificar se um baralho de cartas está viciado. O baralho possui 52 cartas, 
// divididas igualmente entre quatro naipes: copas, espadas, ouros e paus. O algoritmo deve fazer o sorteio fazer 1000 sorteios de naipes 
// e contar quantas vezes cada naipe foi sorteado em uma série de sorteios e verificar se algum naipe tem uma frequência maior que 30%. 
// Se houver, o programa deve indicar que o baralho pode estar viciado.

import leia from "readline-sync"
const tentativas = 1000
var copas = 0
var espada = 0
var ouros = 0
var paus= 0
var percentcopas = 0
var percentespada = 0
var percentouros = 0
var percentpaus = 0
var numero =0



for ( var i = 0; i < tentativas; i ++){

    numero = parseInt(Math.random()*4)+1

    if(numero === 1){
        copas++

    }else if ( numero === 2){
        espada++

    }else if ( numero === 3){
        ouros++
    
   }else if ( numero === 4){
        paus++

}
 } 

var percentcopas  =( copas/tentativas)*100;
var percentespada =( espada/tentativas)*100;
var percentouros =( ouros/tentativas)*100;
var percentpaus =( paus/tentativas)*100;



if (percentcopas > 30 || percentespada >30 || percentouros >30 || percentpaus >30  ){

    console.log("baralho viciado")

} console.log (" Baralho nao viciado")
