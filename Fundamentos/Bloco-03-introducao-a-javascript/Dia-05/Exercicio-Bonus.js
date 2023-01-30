/* Crie duas funções JavaScript com as seguintes especificações:

Não se esqueça de usar template literals

Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

O nome da função deverá ser substituaX;

A função deverá receber um nome por parâmetro;

Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';

A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

Exemplo: */

/* const substituaX = (nome) => {
  const frase = "Trybe x aqui";
  const fraseArray = frase.split(" ");
  for (let i = 0; i < fraseArray.length; i += 1) {
    if (fraseArray[i] === "x") {
      fraseArray[i] = nome;
    }
  }
  return fraseArray.join(" ");
};

console.log(substituaX("Daniel")); */

// OU

const substituaX = (nome) => {
    const frase = 'Trybe x Aqui';
    const fraseArray = frase.split(' ');
    for (palavra in fraseArray) {
        if (fraseArray[palavra] === 'x'){
            fraseArray[palavra] = nome;
        }
    }
    return fraseArray.join(' ');
}
console.log(substituaX('Daniel'));
