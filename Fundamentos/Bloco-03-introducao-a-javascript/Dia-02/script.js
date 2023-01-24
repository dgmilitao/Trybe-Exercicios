/* Lidando com Arrays
Iremos utilizar esse array para realizar os próximos exercícios.*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 - Percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

//Some todos os valores contidos no array e imprima o resultado;

soma = 0;

for (let i = 0; i < numbers.length; i++){
    soma += numbers[i];
}
console.log(soma);

/*Calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.*/

let media = soma / numbers.length;

console.log(media);

/*Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”.*/

if (media > 20) {
    console.log('Valor é maior que 20');
} else {
    console.log("Valor [e menor que 20");
}

/* Utilizando for, descubra qual o maior valor contido no array e imprima-o;*/

vMaior = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (vMaior < numbers[i]) {
        vMaior = numbers[i];
    }
}
console.log('O Maior numero do array é: ' + vMaior);

/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;*/

impares = []

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        impares.push(numbers[i]);
    }
}
console.log('São impares: [' + impares + ']');

/*Utilizando for, descubra qual o menor valor contido no array e imprima-o;*/

vMenor = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (vMenor > numbers[i]) {
        vMenor = numbers[i];
    }
}
console.log('O Menor numero do array é: ' + vMenor);

/*Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;*/

numbers1 = []

for (let i = 0; i < 25; i++) {
    numbers1.push(i);
}
console.log(numbers1);

/*Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.*/

numbers1Div = []

for (let i = 0; i < 25; i++) {
    numbers1Div.push(numbers1[i] / 2);
}
console.log(numbers1Div);

