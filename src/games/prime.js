import getRandomInt from '../utils.js';
import playAnyGame from '../index.js';

export const terms = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getPairQA = () => {
  const QA = [];
  const num = getRandomInt(1, 20);
  const isPrime = () => {
    if (num < 2) {
      return 'no';
    }
    let divider = 2;
    while (divider <= num / 2) {
      if (num % divider === 0) {
        return 'no';
      }
      divider += 1;
    }
    return 'yes';
  };
  const question = `Question: ${num}`;
  QA[0] = question;
  const result = isPrime();
  QA[1] = result;
  return QA;
};

export { playAnyGame };
