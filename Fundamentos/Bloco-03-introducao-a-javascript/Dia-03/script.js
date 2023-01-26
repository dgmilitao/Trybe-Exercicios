/* Aprofunde seus conhecimentos
Leia atentamente os enunciados e faça o que se pede.

O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo: */

/* O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24

Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.*/

let number = 10;
if (number < 0) {
    console.log('Erro!!');
} 
else if (number === 0) {
    console.log('O fatorial de ' + number + ' é 1.');
}

else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log('O fatorial de ' + number + '! é: ' + fact);
}

/* Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. 
Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. */

let word = 'tryber';
let reverseWord = '';

for (let i = 0; i < word.length; i += 1) {
  reverseWord += word[word.length - 1 - i];
}

console.log(reverseWord);