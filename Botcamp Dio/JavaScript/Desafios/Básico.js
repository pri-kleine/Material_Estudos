/*Desafio 1
Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

Entrada
A entrada deverá ser composta pelo valor A na primeira linha, seguido do valor N na segunda. 

Saída
A saída deverá retornar o valor da soma de todos os múltiplos A até o seu limite N.

IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
- "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 
TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".
Entrada	Saída
5
20	    50
Entrada	Saída
3
18	    63

*/

// var a = parseInt(gets());
// var N = parseInt(gets());
 
// let soma = 0;

// for (let i = 0; i <= N; i++) {
//     if (i % a === 0){
//       soma = soma + i
//     }
// }

// print(soma)


/*
Desafio 2
Neste desafio, você terá que criar uma função que faça um número como argumento e retorne "Fizz", "Buzz" ou "FizzBuzz". 

Entrada
Você receberá um número onde: 
Se o número for um múltiplo de 3 e 5 -> "FizzBuzz" ; 
Se o número for apenas múltiplo de 3 -> "Fizz" ; 
Se o número for apenas múltiplo de 5 -> "Buzz"; 
Se o número não for um múltiplo de 3 ou 5, o número deve ser exibido; 

Saída
Retorne a palavra correta de acordo com o seu múltiplo. Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme exemplo abaixo:
EXEMPLO DE ENTRADA  EXEMPLO DE SAÍDA 
3                   Fizz
5                   Buzz
15                  FizzBuzz 
4                   4 
*/

// let resultado = gets();
// print(fizzBuzz(resultado));


// function fizzBuzz(numero){
//     if(numero % 3 === 0 && numero % 5 === 0 ){
//         return 'FizzBuzz';
//     } else if (numero % 3 === 0) {
//         return 'Fizz';
//     } else if (numero % 5 === 0) {
//         return 'Buzz';
//     } else{
//         return numero;
//     }
// }


/*
Descrição
Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   

Entrada
A Entrada será composta por um número inteiro, N. 

Saída
Será  impresso o somatório de N até 0, como no exemplo a baixo: 
EXEMPLO DE ENTRADA  EXEMPLO DE SAÍDA
10	                55
4	                10
15	                120
TODO: Implemente um método que calcule o somatório de um número usando recursividade:
*/

// let n = parseInt(gets());

// let soma = 0;

// function somatorio(n){
//   for (let i = 0; n >= i; i++) {
//     soma = soma + i
//     }
//   return soma
// }

// const resultado = somatorio(n)
// print(resultado)

/*
Desafio
Nesse desafio, dados dois números, verifique se eles são iguais. Caso sejam, retorne "Sao iguais!”. Caso contrário, retorne "Nao sao iguais!” sem as aspas. 

Entrada
As entradas serão dois valores, um em cada linha, representados por A e B, que sempre serão números inteiros. 

Saída
A saída deverá retornar a frase "Sao iguais!" caso A e B sejam o mesmo valor. Caso contrário,  retorne "Nao sao iguais!", sem as aspas.
EXEMPLO DE ENTRADA  EXEMPLO DE SAÍDA 

1
2                   Nao sao iguais! 

50
50                  Sao iguais! 

38
90                  Nao sao iguais! 
TODO: Imprima se os valores numéricos passados são iguais ou não.
*/

// let A = gets();
// let B = gets();

// if(A === B){
//     print('Sao iguais!')
// }else{
//     print('Nao sao iguais!')
// }

/*
Desafio
Uma busca sequencial se caracteriza por percorrermos todos os  elementos de uma estrutura em busca do elemento “X” desejado. Neste desafio, dada uma estrutura de vetor A [a1, a2...an], percorra todo o vetor fazendo as comparações de A[N] = X. Caso a condição seja verdadeira, “X” existe na estrutura e a busca será concluída com sucesso. 
Considere um array de 10 elementos do tipo inteiro: 
Os elementos são {64, 137, -16, 43, 67, 81, -90, 212, 10, 75}. 
● Carregue esses elementos em um array.  
● Implementação da busca sequencial: 
● Crie um método  que realiza uma busca sequencial.  
● Se o valor constar no array, retorne um texto contendo o valor e sua respectiva posição no array. Caso contrario retorne um texto dizendo que o número não foi encontrado, conforme exemplos abaixo.

Entrada
A entrada consiste em um valor de busca e/ou array

Saída
A saída será a a posição do elemento no array, caso o valor não se encontre na Array, retorne a frase " Numero __ nao encontrado!", como no exemplo abaixo:
EXEMPLO DE ENTRADA EXEMPLO DE SAÍDA 

81                  Achei 81 na posicao 5 

10                  Achei 10 na posicao 8 

-16                 Achei –16 na posicao 2 

4                   Numero 4 nao encontrado! 
TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.
*/

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];

let valor = 4;
let valorEncontrado = false

for (let index = 0; index < elementos.length; index++) {
    if(elementos[index] === valor){
        print(`Achei ${valor} na posicao ${index}`);
        valorEncontrado = true
    }
}

if(valorEncontrado == false ){
    print(`Numero ${valor} nao encontrado!`);
}
