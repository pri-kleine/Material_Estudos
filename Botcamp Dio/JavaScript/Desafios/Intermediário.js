/*
Desafio 1 - Fatorial Desajeitado
O fatorial de um número inteiro positivo N é o produto de todos os inteiros positivos menores ou iguais a n. Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando as operações de multiplicação por uma rotação fixa de operações cuja ordem é: multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. Lembre-se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de operações aritméticas. Além disso, a divisão neste caso sempre resulta em um número inteiro, por exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial desajeitado de n.
Entrada A entrada consiste em um valor inteiro positivo N.
Saída A saída consiste em retornar o valor do seu fatorial desajeitado de N, conforme exemplo abaixo.

Exemplo 1:
Entrada	Saída
4	    7
Explicação: 7 = 4 * 3 / 2 + 1 

Exemplo 2:
Entrada	Saída
10	    12
Explicação: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1
*/


let n = 10
let fatorial = 0


if (n <= 2) {
    for (let index = 0; index < n; index++){
        fatorial = n

    }

 print(n); 

} 

/*
Desafio 2 - Checagem de Palindromos
Neste desafio você deverá construir uma função que recebe uma String e identifique se a mesma é um palíndromo, ou seja, se a String é igual a ela mesma invertida. 
Dado que temos a String "digital" uma vez invertida temos "latigid" que são diferentes. 
Logo, NÃO é um Palíndromo. 
Já se recebemos a string "radar" uma vez invertida temos "radar" que são iguais.
Entrada
A entrada consiste em um palavra.
Saída
Para cada String informada, terá uma saída de valor Booleano: TRUE, caso a palavra seja um palíndromo, ou FALSE caso a palavra NÃO seja um palíndromo.

Exemplos de Entrada	Exemplos de Saída
radar               TRUE
digital	            FALSE
ana	                TRUE
*/
let resultado = gets();
print(checaPalindromo(entrada));



/*
Desafio 3 - Quadrados Perfeitos
Dado um inteiro n, retorne o menor número de números quadrados perfeitos cuja soma seja n. Um quadrado perfeito é um inteiro que é o quadrado de um inteiro; em outras palavras, é o produto de algum inteiro consigo mesmo. Por exemplo, 1, 4, 9 e 16 são quadrados perfeitos, enquanto 3 e 11 não são. 
Entrada
A entrada consiste em um número inteiro n, representando o valor total. 
Saída
A saída consiste em retornar o menor número de números quadrados perfeitos. 

EXEMPLO DE ENTRADA      EXEMPLO DE SAÍDA 
12                      3 
13                      2 
10                      2 
*/

let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

const dp = new Array(n + 1).fill(Infinity); 
dp[0] = 0; 

//TODO: Com base no valor total, retorne o menor número de quadrados perfeitos.

/*
Desafio 4 - Matriz Par e Impar
Seu Raimundo tem uma lista de números. Porém, ele gosta muito das coisas em ordem e deseja que você o ajude a construir um programa que pegue todas as listas dele, uma de cada vez, e coloque os inteiros pares no início e os inteiros ímpares no final.
Entrada
A entrada são arrays de tamanho variado que possuem somente números inteiros.
Saída
A saída deverá retornar todos os valores pares para o começo do array, seguido pelos ímpares, conforme exemplo abaixo:

Exemplo 1
Entrada	          Saída
  4,3,1,2  	      2,4,3,1 
Exemplo 2
Entrada	          Saída
  6,4,3,8,5  	  8,4,6,3,5
Exemplo 3
Entrada	          Saída
  1,0	          0,1  
*/
let arr = gets().split(''); 
let arrVazio = []; 

// TODO: crie a condição necessária para que o array fique ordenado como o exercício pede

/*
Desafio 5 - 
Dada uma string com apenas os seguintes caracteres '(', ')', '{', '}', '[', ']' determine se uma determinada string é válida. 
Entrada
Uma string é considerada válida se:
Caracteres de abertura devem ser fechadas pelo mesmo tipo. Abertura devem ser fechados com uma chave correspondente. Uma string vazia é considerada válida. 
Saída
A saída corresponde a um valor Booleano como no exemplo abaixo:

Entrada	Saída
[ ]     true
( )     true
[ )     false
 
*/
var isValid = function(s) {    
    const stack = []; 

//TODO: implemente a lógica de caracteres válidos e retorne se a string é valida ou não.

 /*
*/
