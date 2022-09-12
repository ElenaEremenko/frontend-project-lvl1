import getRandomInt from '../utils.js';
import playAnyGame from '../index.js';

export const terms = 'Find the greatest common divisor of given numbers.';

export const getPairQA = () => {
  const QA = [];
  const num1 = getRandomInt(1, 15);
  const num2 = getRandomInt(1, 15);
  const question = `Question: ${num1} ${num2}`;
  QA[0] = question;
  const getSmallestNum = () => (num1 >= num2 ? num2 : num1);
  const theSmallestNum = getSmallestNum();
  const getBiggestNum = () => (num1 >= num2 ? num1 : num2);
  const theBiggestNum = getBiggestNum();
  const getRightAnswer = () => {
    let answer;
    for (let i = theSmallestNum; i >= 1; i -= 1) {
      if (theBiggestNum % i === 0 && theSmallestNum % i === 0) {
        answer = i;
        break;
      }
    }
    return answer;
  };
  const tempResult = getRightAnswer();
  const result = tempResult.toString();
  QA[1] = result;
  return QA;
};

export { playAnyGame };
