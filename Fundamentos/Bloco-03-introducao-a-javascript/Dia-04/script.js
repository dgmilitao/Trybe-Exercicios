//Exemplo Video Aula - Objetos

let singer = {
    name: 'Milton',
    lastname: 'Nascimento',
    nickname: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
    bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    }
};
//Usando . para acessar propriedades;
console.log('O cantor ' + singer.name + ' ' + singer.lastname + ' possui ' + singer.age + ' anos.' );

//Usando chaves para acessar propriedades;
console.log('O cantor ' + singer['name'] + ' ' + singer['lastname'] + ' possui ' + singer['age'] + ' anos.');

//criando mais uma propriedade;
singer['fullName'] = singer.name + ' ' + singer.lastname;

console.table(singer);

console.log('O cantor ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state);

/* Para fixar - Exercicio Video Aula (Objetos) */

/* Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo: */

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

console.log('Tabela Player');
console.table(player);

/* Acesse as chaves name, lastName e age, usando a sintaxe meuObjeto.chave, 
e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”. */

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

/* Adicione ao objeto a chave bestInTheWorld, usando a sintaxe meuObjeto.chave = valor, e atribua a essa chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo. */

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
player['fullName'] = player.name + ' ' + player.lastName;

console.table(player);

/* Acesse a chave bestInTheWorld, usando a sintaxe meuObjeto['chave'], e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”. */

 console.log('A jogadora ' + player.fullName + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.');

/*  Acesse a chave medals, usando a sintaxe meuObjeto.chave, e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”. */

console.log('A jogadoa possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' de prata.');


//Exemplo Video Aula - For in / for of

/* Para fixar
No exemplo acima, utilizamos o for/of para percorrer o nosso iterável e nos retornar o valor dos índices.

Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
 */

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for (let i in names) {
    console.log('Ola! ' + names[i]);
}