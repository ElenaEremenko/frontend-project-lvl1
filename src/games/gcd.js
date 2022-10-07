import getRandomInt from '../utils.js';
import playAnyGame from '../index.js';

const terms = 'Find the greatest common divisor of given numbers.';
const getRightAnswer = (num1, num2) => {
  const getSmallestNum = () => (num1 >= num2 ? num2 : num1);
  const theSmallestNum = getSmallestNum();
  const getBiggestNum = () => (num1 >= num2 ? num1 : num2);
  const theBiggestNum = getBiggestNum();

  let answer;
  for (let i = theSmallestNum; i >= 1; i -= 1) {
    if (theBiggestNum % i === 0 && theSmallestNum % i === 0) {
      answer = i;
      break;
    }
  }
  return answer.toString();
};

const getPairQA = () => {
  const QA = [];
  const num1 = getRandomInt(1, 15);
  const num2 = getRandomInt(1, 15);
  const question = `Question: ${num1} ${num2}`;
  QA[0] = question;
  const result = getRightAnswer(num1, num2);
  QA[1] = result;
  return QA;
};

const playGcdGame = () => {
  playAnyGame(terms, getPairQA);
};

export default playGcdGame;
