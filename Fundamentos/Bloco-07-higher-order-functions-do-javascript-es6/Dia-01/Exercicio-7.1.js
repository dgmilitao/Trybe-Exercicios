// Exercícios - agora, a prática

// Parte I

// Nova pessoa contratada:

// Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada.
// Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:

// crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente,
//  gere um email no formato nome_da_pessoa@trybe.com;

// utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.
const emailGenerate = (fullName) => {
  const email = fullName.toLowerCase().replace(" ", "_");
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callBack) => {
  const employees = {
    id1: callBack("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callBack("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callBack("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees(emailGenerate));

// Sorteador de loteria:

// Desenvolva uma HOF que retorne o resultado de um sorteio.
// Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado.
// O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

const verifyWin = (bet, number) => {
  if (bet === number) {
    return "Parabens, você ganhou!";
  }
  return "Tente novamente!";
};

// console.log(verifyWin(2, 2));

const loteryRaffleNumber = (bet, callback) => {
    const number = Math.ceil(Math.random() * 5);
    return `O numero sorteado é: ${number} => ${verifyWin(bet, number)}`;
}

console.log(loteryRaffleNumber(5, verifyWin));

// Corretor automático de exame
// Crie uma HOF que receberá três parâmetros:

// O primeiro será um array de respostas corretas (soluções);

// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

// Uma resposta correta adiciona 1 ponto à pontuação final;

// A ausência de uma resposta não altera a pontuação (quando for “N.A”);

// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answerScore = (rightAnswer, studentAnswer) => {
    if (rightAnswer === studentAnswer) {
      return 1;
    } if (studentAnswer === 'N.A') {
      return 0;
    }
    return -0.5;
  };

const checkAnswers = (RIGHT_ANSWERS, STUDENT_ANSWERS, action) => {
    let score = 0;
    RIGHT_ANSWERS.forEach((element, index) => {
        const actionReturn = action(RIGHT_ANSWERS[index], STUDENT_ANSWERS[index]);
        score += actionReturn;
    });
    return `Resutaldo final: ${score} pontos`;
}
console.log(checkAnswers(RIGHT_ANSWERS,STUDENT_ANSWERS, answerScore));


// 🚀 Organizando uma biblioteca
// Estes exercícios praticam os conceitos de Higher Order Functions associados a outros temas de fundamentos já vistos,
//  como arrow functions, template literals e objetos. Essa mistura de conceitos é muito importante para o seu aprendizado, então use tudo o que sabe para resolver os exercícios!

// Utilize o seguinte código como template para realizar os exercícios: 

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
// Adicione o código do exercício aqui:

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const authorBornIn1947 = (array) => array.find((array) => array.author.birthYear === 1947).author.name;
 
console.log(authorBornIn1947(books));

// Retorne o nome do livro com menor número de caracteres (menor nome).

const smallerName = (array) => {
  let nameBook = '';
  array.forEach((element) => {
    if (!nameBook || element.name.length < nameBook.length) {
        nameBook = element.name;
    }
  })
  return nameBook;
}

console.log(smallerName(books));

// Encontre o primeiro livro cujo nome possua 26 caracteres.

const getNamedBook = (array) => array.find(array => array.name.length === 26);

console.log(getNamedBook(books));

// Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.

const expectedResult = false;

function everyoneWasBornOnSecXX (array) {
  return array.every(array => array.author.birthYear > 1901 && array.author.birthYear < 2000);
}

console.log(everyoneWasBornOnSecXX(books));

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.\\const expectedResult = true;

const someBookWasReleaseOnThe80s = (array) => array.some(array => array.releaseYear >= 1980 && array.releaseYear < 1989);  

console.log(someBookWasReleaseOnThe80s(books));

// Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.

const authorUnique = (array) => {
  return array.some(array => array.author.birthYear === array.author.birthYear && array.author.name !== array.author.name);
}

console.log(authorUnique(books));