import getRandomInteger from '../utils.js';
import playAnyGame from '../index.js';

const terms = 'What is the result of the expression?';
const getRightAnswer = (operator, num1, num2) => {
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
  return rightAnswer.toString();
};

const getPairQA = () => {
  const QA = [];
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomInteger(0, operators.length - 1);
  const randomOperator = operators[randomIndex];
  const num1 = getRandomInteger(1, 10);
  const num2 = getRandomInteger(1, 10);
  const question = `Question: ${num1} ${randomOperator} ${num2}`;
  QA[0] = question;
  const expectedAnswer = getRightAnswer(randomOperator, num1, num2);
  QA[1] = expectedAnswer;
  return QA;
};

const playCalcGame = () => {
  playAnyGame(terms, getPairQA);
};

export default playCalcGame;
