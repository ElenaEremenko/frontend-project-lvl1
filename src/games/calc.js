import getRandomInt from '../utils.js';
import playAnyGame from '../index.js';

const terms = 'What is the result of the expression?';
const getRightAnswer = (operator, num1, num2) => {
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
  return result.toString();
};

const getPairQA = () => {
  const QA = [];
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomInt(0, operators.length - 1);
  const randomOperator = operators[randomIndex];
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const question = `Question: ${num1} ${randomOperator} ${num2}`;
  QA[0] = question;
  const result = getRightAnswer(randomOperator, num1, num2);
  QA[1] = result;
  return QA;
};

const playCalcGame = () => {
  playAnyGame(terms, getPairQA);
};

export default playCalcGame;
