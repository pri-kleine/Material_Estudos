const entradas = [15, 5, 50, 10, 98, 23, 33, 44, 100, 1, 7];
// lista de numeros sorteados
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function size(){
    return entradas.length
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, size, print };

/*
Exercício dado na aula:

Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 -100.
Faça um programa que receba 5 números sorteados para os alunos e mostre o maior número 
sorteado.

Dados de Entrada:
5
50
10
98
23

Saída:
98
*/