// Questão 01
// Escreva um algoritmo que receba 5 nomes e 5 idades do usuário, armazene essas informações em dois vetores, 
// e depois exiba o nome e a idade da pessoa mais velha e da pessoa mais nova.

import leia from "readline-sync"

var nome = [];
var idade = [];
var maiorNomeMaiorIdade =""
var maior = 0
var maiorIdade=0
var menorNomeMenorIdade=""
var menor = 200
var menorIdade =0

for (var i = 1; i < 7; i++){

    nome[i] = leia.question(`DIGITE O NOME DA ${i}ª PESSOA `)
    idade[i] = leia.question(`DIGITE A IDADE DA ${i}ª PESSOA `)
  

    if (idade[i] > maiorIdade){
        maiorNomeMaiorIdade = nome[i]
        maiorIdade = idade[i]

    } else if (idade[i] > menorIdade){
        menorNomeMenorIdade = nome[i]
        menorIdade = idade[i]

    }

} console.log(` QUEM TEM A MAIOR IDADE E: ${maiorNomeMaiorIdade} com ${maiorIdade}`)
  console.log(` QUEM TEM A MENOR IDADE E: ${menorNomeMenorIdade} com ${menorIdade}`)