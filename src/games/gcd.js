import getRandomInteger from '../utils.js';
import playAnyGame from '../index.js';

const terms = 'Find the greatest common divisor of given numbers.';
const getRightAnswer = (num1, num2) => {
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
  return rightAnswer.toString();
};

const getPairQA = () => {
  const QA = [];
  const num1 = getRandomInteger(1, 15);
  const num2 = getRandomInteger(1, 15);
  const question = `Question: ${num1} ${num2}`;
  QA[0] = question;
  const expectedAnswer = getRightAnswer(num1, num2);
  QA[1] = expectedAnswer;
  return QA;
};

const playGcdGame = () => {
  playAnyGame(terms, getPairQA);
};

export default playGcdGame;
