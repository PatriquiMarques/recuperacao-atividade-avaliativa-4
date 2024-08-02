// Questão 03
// Crie um algoritmo que leia uma quantidade n de números inteiros fornecida pelo usuário e armazene esses números em um vetor.
//  O algoritmo parar de solicitar valores, quando o usuário digitar o numero 0. Ao final,
//   o algoritmo deve calcular e imprimir a média desses números,a soma de todos os números o maior e menor digitado. (Desconsiderar o 0).

import leia from "readline-sync"

var numero = 0

var numeros = []
var maior = 0
var numeroMaior = 0
var menor = 0
var numeroMenor = 0
 var soma = 0
 var i = 0
 
 
   
 do {numero = leia.question(`DIGITE UM NÚMERO OU DIGITE 0 (ZERO) PARA PARAR `)

    if(numero != 0){
   
        soma = soma + numero
        numeros.push(numero);
       

        if (numero > maior) {
            maior = numero;   
        }

        if (numero < menor) {
            menor = numero;   
        }

    }

  } while (numero != 0)

  console.log(`A SOMA TOTAL DOS NUMEROS DIGITADOS E ${soma} E O MAIOR NUMERO E: ${maior}  E O MENOR NUMERO E:${menor} `)
