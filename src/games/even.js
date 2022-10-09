import getRandomInteger from '../utils.js';
import playAnyGame from '../index.js';

const terms = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getPairQA = () => {
  const QA = [];
  const num = getRandomInteger(1, 100);
  const question = `Question: ${num}`;
  QA[0] = question;
  const expectedAnswer = isEven(num) ? 'yes' : 'no';
  QA[1] = expectedAnswer;
  return QA;
};

const playEvenGame = () => {
  playAnyGame(terms, getPairQA);
};

export default playEvenGame;
