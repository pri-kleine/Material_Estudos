
/*1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre 
da faculdade calcule e imprima a sua média e a sua classificação conforme a 
tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

AND = &&
*/

let nota1 = 7

let nota2 = 8

let nota3 = 8

let Media = (nota1 + nota2 + nota3) / 3

if(Media < 5){
    console.log(`Sua média foi ${Media.toFixed(2)}. Você está reprovado(a).`)
}else if (Media > 7){
    console.log(`Sua média foi ${Media.toFixed(2)}. Você está aprovado(a).`)
} else{
    console.log(`Sua média foi ${Media.toFixed(2)}. Você está de recuperação.`)
}



/*2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;*/

let peso = 80
let altura = 1.75
let IMC = peso / (altura*altura)
console.log(IMC.toFixed(2))

if(IMC < 18.5){
    console.log(`Seu IMC é ${IMC.toFixed(2)}. Você está Abaixo do peso.`)
}else if (IMC >= 18.5 && IMC <25){
    console.log(`Seu IMC é ${IMC.toFixed(2)}. Você está no Peso normal.`)
}else if (IMC >= 25 && IMC < 30){
    console.log(`Seu IMC é ${IMC.toFixed(2)}. Você está Acima do peso.`)
}else if (IMC >= 30 && IMC < 40){
    console.log(`Seu IMC é ${IMC.toFixed(2)}. Você está Obeso.`)
} else{
    console.log(`Seu IMC é ${IMC.toFixed(2)}. Você está com Obsesidade Grave.`)
}

/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, 
considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento
 escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/

let preco = 50
let modoPagamento = 'três ou mais vezes'

if(modoPagamento === 'débito'){
    console.log(`Pagamento em Débito: o preço final será ${preco*0.9}`)
}else if (modoPagamento === 'Dinheiro' || modoPagamento === 'PIX'){
    console.log(`Pagamento em Dinheiro ou Pix: o preço final será ${preco*0.85}`)
}else if (modoPagamento === 'em duas vezes'){
    console.log(`Pagamento em duas vezes: o preço final será ${preco}`)
} else{
    console.log(`Pagamento em três ou mais vezes: o preço final será ${preco*1.1}.`)
}
