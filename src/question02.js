// Questão 02
// Escreva um algoritmo que solicite ao usuário um texto ou palavra e ele conte quantas consoantes esse texto ou palavra tem. 
// Vale lembrar que toda String(texto), nada mais é do que um vetor de caracteres.

import leia from "readline-sync"
var consoantes = 0;
var palavra = leia.question("DIGITE UMA PALAVRA")
palavra = palavra.toUpperCase();


for (var i = 0; i < palavra.length; i++){

    if (palavra[i] != 'A' && palavra[i] != 'E' && palavra[i] != 'I'&& palavra[i] != 'O' && palavra[i] != 'U'){
        consoantes ++
    }
} console.log(`O NUMERO DE VOGAIS E: ${consoantes}`)

