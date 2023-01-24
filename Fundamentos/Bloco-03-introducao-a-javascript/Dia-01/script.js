//Exercicios 3.1

/*Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. 
Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:*/

let A = 5;
let B = 10;

let adicao = A + B;
console.log(adicao);

let subtracao = A - B;
console.log(subtracao);

let multiplicacao = A * B;
console.log(multiplicacao);

let divicao = A / B;
console.log(divicao);

let modulo = A % B;
console.log(modulo);

/*Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.*/

const C = 15;
const D = 20;
const E = 25;

if (C > D) {
    console.log('C é maior que D.');  
} else {
    console.log('D é maior que C');
}

/*Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.*/

const F = 30;
const G = 35;
const H = 40;

if (F > G && F > H){
    console.log('O maior numero é: ' + F +'(F)');
} else if (G > F && G > H){
    console.log('O maior numero é: ' + G + '(G)');
} else {
    console.log('O maior número é: ' + H + ' (H)');
}

/*Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo. 
Caso não seja nem positivo e nem negativo retorne “zero”.*/

const num = 7;

if (num > 0) {
    console.log('Positive');
} else if (num < 0){
    console.log('Negative');
} else {
    console.log('Zero')
}

/*Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo.
Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.*/

const AnguloA = 15;
const AnguloB = 45;
const AnguloC = 90;

let somaAngulo = AnguloA + AnguloB + AnguloC;

if (somaAngulo === 180){
    console.log(true);
} else if (somaAngulo < 180 && somaAngulo > 0) {
    console.log(false);
} else if (somaAngulo < 0) {
    console.log('Erro: Angulo invalido!')
} 

/* Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais)*/

let PecaXadrex = 'Rainha';

switch(PecaXadrex.toLowerCase){
    case 'Rainha':
    console.log('Move-se na diagonal, vertical e horizontal'); break;
    case 'Rei':
    console.log('Move-se uma casa para qualquer direção'); break;
    case 'Bispo':
    console.log('Move-se na diagonal'); break;
    case 'Torre':
    console.log('Move-se na horizontal e vertical'); break;
    case 'Cavalo':
    console.log('Move-se em "L" e pode pular peças'); break;
    case 'Peão':
    console.log('Apenas uma casa para frente, no primeiro movimento podem ser duas casas'); break;
    default:
        console.log('Erro! Peça invalida')
}