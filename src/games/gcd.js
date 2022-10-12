import getRandomInteger from '../utils.js';
import play from '../index.js';

const terms = 'Find the greatest common divisor of given numbers.';
const getGCD = (num1, num2) => {
  const getSmallestNum = () => (num1 >= num2 ? num2 : num1);
  const theSmallestNum = getSmallestNum();
  const getBiggestNum = () => (num1 >= num2 ? num1 : num2);
  const theBiggestNum = getBiggestNum();

  let rightAnswer;
  for (let i = theSmallestNum; i >= 1; i -= 1) {
    if (theBiggestNum % i === 0 && theSmallestNum % i === 0) {
      rightAnswer = i;
      break;
    }
  }
  return rightAnswer;
};

const getRound = () => {
  const num1 = getRandomInteger(1, 15);
  const num2 = getRandomInteger(1, 15);
  const question = `${num1} ${num2}`;
  const expectedAnswer = String(getGCD(num1, num2));
  return [question, expectedAnswer];
};

const playGcdGame = () => {
  play(terms, getRound);
};

export default playGcdGame;
