import getRandomInteger from '../utils.js';
import playAnyGame from '../index.js';

const terms = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let divider = 2;
  while (divider <= num / 2) {
    if (num % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

const getPairQA = () => {
  const QA = [];
  const num = getRandomInteger(1, 20);
  const question = `Question: ${num}`;
  QA[0] = question;
  const expectedAnswer = isPrime(num) ? 'yes' : 'no';
  QA[1] = expectedAnswer;
  return QA;
};

const playPrimeGame = () => {
  playAnyGame(terms, getPairQA);
};

export default playPrimeGame;
