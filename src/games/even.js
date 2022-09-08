import getRandomInt from '../utils.js';
import playAnyGame from '../index.js';

export const terms = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getPairQA = () => {
  const QA = [];
  const num = getRandomInt(1, 100);
  const isEven = () => (num % 2 === 0 ? 'yes' : 'no');
  const question = `Question: ${num}`;
  QA[0] = question;
  const result = isEven(num);
  QA[1] = result;
  return QA;
};

export { playAnyGame };
