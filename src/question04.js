// Questão 04
// Escreva um algoritmo que gere uma senha aleatória de comprimento especificado pelo usuário.
//  Você deve solicitar ao usuário o tamanho da senha e gerar de forma aleatório. A senha deve conter uma combinação de letras maiúsculas, 
//  minúsculas, números e caracteres especiais.

import leia from "readline-sync"

var senha = "";
var numeroDeDigitos = 0;
var num
var caracteres = ""
var  char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&'

var numeroDeDigitos = leia.question("DIGITE A QUANTIDADE DE CARACTERS QUE VOCÊ DESEJA QUE A SUA SENHA TENHA")

for ( var i = 0; i < numeroDeDigitos; i++){

    caracteres  =   parseInt(Math.random() * char.length)

    senha = senha + char[caracteres];


} console.log(`SUA SENHA E : ${senha}`)