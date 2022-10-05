import getRandomInt from '../utils.js';
import playAnyGame from '../index.js';

export const terms = 'What is the result of the expression?';

export const getPairQA = () => {
  const QA = [];
  const operators = ['+', '-', '*'];
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const randomIndex = getRandomInt(0, operators.length - 1);
  const operator = operators[randomIndex];
  const question = `Question: ${num1} ${operator} ${num2}`;
  QA[0] = question;
  const getRightAnswer = () => {
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        console.log('Error');
    }
    return result;
  };
  const tempResult = getRightAnswer();
  const result = tempResult.toString();
  QA[1] = result;
  return QA;
};

export { playAnyGame };
