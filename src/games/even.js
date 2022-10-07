import getRandomInt from '../utils.js';
import playAnyGame from '../index.js';

const terms = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getPairQA = () => {
  const QA = [];
  const num = getRandomInt(1, 100);
  const question = `Question: ${num}`;
  QA[0] = question;
  const result = isEven(num) ? 'yes' : 'no';
  QA[1] = result;
  return QA;
};

const playEvenGame = () => {
  playAnyGame(terms, getPairQA);
};

export default playEvenGame;
