import getRandomInteger from '../utils.js';
import play from '../index.js';

const terms = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getRound = () => {
  const num = getRandomInteger(1, 100);
  const question = num;
  const expectedAnswer = isEven(num) ? 'yes' : 'no';
  return [question, expectedAnswer];
};

const playEvenGame = () => {
  play(terms, getRound);
};

export default playEvenGame;
