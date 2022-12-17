// // Exemplo de como criar um Objeto Literal
// const exemploObjetoLiteral = {
//     nome: 'Fulana de tal',
//     idade: 33,
//     descrever: function(){ 
//         console.log(`Meu nome é ${this.nome} e minha idade ${this.idade}`);
//     }
// }
// console.log(exemploObjetoLiteral.nome)
// console.log(exemploObjetoLiteral.idade)

// /*Podemos usar funções dentro de um objeto - chamado de método:*/
// exemploObjetoLiteral.descrever()

// // incrementar um dado ou valor no objeto (no exemplo, altura):
// exemploObjetoLiteral.altura = 1.70
// console.log(exemploObjetoLiteral)

// // posso deletar chaves e valores também:
// delete exemploObjetoLiteral.nome
// console.log(exemploObjetoLiteral)

// // acessar atributos dinamicamente
// const atributo = 'idade'
// console.log(exemploObjetoLiteral[atributo])

// Criar uma classe Pessoa. Uma instacia é um objeto que segue este modelo

// class Pessoa {
//     nome;
//     idade;
//     anoDeNascimento;

//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//         this.anoDeNascimento = 2022 - idade;
//     }

//     descrever() {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);  
//     }
// }

// Criação de instâncias
// const vitor = new Pessoa('Vitor', 25);
// const renan = new Pessoa('Renan', 30);

// function compararPessoas(p1, p2) {
//     if (p1.idade > p2.idade) {
//         console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
//     } else if (p2.idade > p1.idade) {
//         console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
//     } else {
//         console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
//     }
// }

// compararPessoas(vitor, renan);

/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio 
de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do 
combustível nos dê o valor gasto em reais para realizar este percurso.*/



class Carros {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    descrever() {
        console.log(`Meu carro é da marca é ${this.marca}, da cor ${this.cor} e com gasto médio ${this.gastoMedio}`);  
    }

    custoViagem(distanciaViagem, precoCombu){
        console.log ((distanciaViagem / this.gastoMedio) * precoCombu)
    }
}

let meuCarro = new Carros ('Ka', 'vermelho', 10) 


// console.log(`O gasto da viagem será ${meuCarro.custoViagem(100, 4)}`)
meuCarro.descrever()
meuCarro.custoViagem(100, 4)



/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC 
(IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 
de altura e peça ao José para dizer o valor
do seu IMC;*/

class Pessoa2 {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}, meu peso é ${this.peso} e minha altura é ${this.peso}.`)
    }

    calcularImc(){
        return (this.peso/(this.altura * this.altura))
    }
}

let Jose = new Pessoa2 ('Jose', 70, 1.75);
console.log(Jose.calcularImc())
let Pri = new Pessoa2 ('Jose', 69, 1.70);
console.log(Pri.calcularImc())

