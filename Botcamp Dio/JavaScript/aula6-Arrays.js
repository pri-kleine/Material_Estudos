// Criação de lista vazia:
const notas = [];
// Adicionar valores na lista
notas.push(5);
notas.push(6);
notas.push(7);
notas.push(10);

let soma = 0;
console.log(notas);

/*for 'criado' pelo VScode:
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}*/

notas.pop(); //remove o ultimo item 
console.log(notas);

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);

// Exercícios:
// 1) Crie um programa que dado um número imprima a sua tabuada.

for (let i = 0; i < 11; i++) {
    console.log(i*7)
}

// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

let lista = [];
for (let i = 0; i < 12; i++) {
    lista.push(i);
}
console.log(`minha lista é ${lista}`);

for (let index = 0; index < lista.length; index++) {
    if(lista[index] % 2 === 0 ){
        console.log(`o valor par é ${lista[index] }`)
    }
}

// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = ['Valeria', 'Fabiana', 'Patricia', 'Vagner', 'Valdislei'];
const listaV = []
for (let index = 0; index < nomes.length; index++) {
    if(nomes[index][0] == 'V'){
        listaV.push(nomes[index])
    }
}
console.log(`A lista dos nomes que começam com a letra V é ${listaV}`)
console.log(listaV)

// 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

let lista2 = [];
for (let i = 10; i <= 50; i++) {
    lista2.push(i);
}
console.log(`minha lista é ${lista2}`);
const numPar = []
for (let index = 0; index < lista2.length; index++) {
    if(lista2[index] % 2 === 0 ){
        numPar.push(lista2[index])
    }
}
console.log(`a lista de numeros pares é ${numPar}`)
console.log(numPar)

// 5) Dado uma lista com as médias tiradas pelos alunos. 
// Imprima todas as médias que ficaram de recuperação (média < 5).
//    Ex de lista = [2, 7, 3, 8, 10, 4]
const alunosMedia = [2, 7, 3, 8, 10, 4, 5, 6, 2.5]
let recuperacao = []

for (let index = 0; index < alunosMedia.length; index++) {
    if(alunosMedia[index] < 5){
        recuperacao.push(alunosMedia[index])
    }
}
console.log(`A lista das médias que ficaram em recuperação é ${recuperacao}`)
console.log(recuperacao)

// 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//    Ex de lista de notas = [2, 7, 3, 8, 10, 4]
const alunosNotas = [2, 7, 3, 8, 10, 4]
let maiorNota = []

for (let index = 0; index < (alunosNotas.length-1); index++) {
    if(alunosNotas[index] < alunosNotas[index+1]){
        maiorNota.pop()
        maiorNota.push(alunosNotas[index+1])
    }
}
console.log(`A maior nota foi ${maiorNota}`)
console.log(maiorNota)