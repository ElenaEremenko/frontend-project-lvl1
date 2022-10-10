import getRandomInteger from '../utils.js';
import play from '../index.js';

const terms = 'What is the result of the expression?';
const calculate = (operator, num1, num2) => {
  let rightAnswer;
  switch (operator) {
    case '+':
      rightAnswer = num1 + num2;
      break;
    case '-':
      rightAnswer = num1 - num2;
      break;
    case '*':
      rightAnswer = num1 * num2;
      break;
    default:
      console.log('Error');
  }
  return rightAnswer;
};

const getRound = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomInteger(0, operators.length - 1);
  const randomOperator = operators[randomIndex];
  const num1 = getRandomInteger(1, 10);
  const num2 = getRandomInteger(1, 10);
  const question = `Question: ${num1} ${randomOperator} ${num2}`;
  const expectedAnswer = String(calculate(randomOperator, num1, num2));
  return [question, expectedAnswer];
};

const playCalcGame = () => {
  play(terms, getRound);
};

export default playCalcGame;
