let numero = 10;

let isNumeroPar = numero % 2 === 0;
console.log(isNumeroPar)

if(isNumeroPar){
    console.log('Par')
}else{
    console.log('Impar')
}

/*if(!isNumeroPar){
    console.log('Impar')
}
// a exclamação ! é igual se for falso*/

if(numero === 0){
    console.log('o numero é invalido')
}else if (isNumeroPar){
    console.log('Par')
} else{
    console.log('Impar')
}

/*Desafio

Qual o valor da sua viagem?
Você terá 3 variáveis, sendo elas:
1 - Preço do etanol - 3,19 reais
2 - Preço do gasolina - 4,10 reais
3 - Tipo de comb do seu carro - etanol
4 - Gasto médio de combustível etanol - 8km/L
5 - Distancia em km da viagem - 100km
6 - Gasto médio de combustível gasolina- 10km/L

Imprima no console o valor que será gasto para realizar esta viagem*/

let tipoCombu = 'gas';
let precoetanol = 3.19;
let precogasolina = 4.10;
let gastoMedioGasolina = 10;
let gastoMedioEtanol= 8;
let distancia = 100;

let precoViagemEtanol = (distancia/gastoMedioEtanol * precoetanol)
let precoViagemGasolina = (distancia/gastoMedioGasolina * precogasolina)

if(tipoCombu === 'etanol'){
    console.log(`O valor da viagem com Etanol será ${precoViagemEtanol}`)
}else if (tipoCombu === 'gasolina'){
    console.log(`O valor da viagem com Gasolina será ${precoViagemGasolina}`)
} else{
    console.log('Você não tem combustível no carro. Vai dormir!')
}


// console.log('teste')
// console.log('O valor da viagem com Etanol será ' + precoViagemEtanol.toFixed(2))
// console.log('O valor da viagem com Gasolina será ' + precoViagemGasolina.toFixed(2))





