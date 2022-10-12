import getRandomInteger from '../utils.js';
import play from '../index.js';

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

const getRound = () => {
  const num = getRandomInteger(1, 20);
  const question = num;
  const expectedAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, expectedAnswer];
};

const playPrimeGame = () => {
  play(terms, getRound);
};

export default playPrimeGame;
