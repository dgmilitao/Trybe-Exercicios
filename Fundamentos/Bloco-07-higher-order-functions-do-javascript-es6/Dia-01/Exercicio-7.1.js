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


 