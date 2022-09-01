import readlineSync from 'readline-sync';
import { userName } from './greeting.js';

export const terms = 'Answer "yes" if the number is even, otherwise answer "no".';
export const congratulations = `Congratulations, ${userName}!`;

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
const getRandomInt = () => Math.floor(Math.random() * 100) + 1;

export const playBrainEven = () => {
  let i = 1;
  while (i <= 3) {
    const num = getRandomInt();
    const question = `Question: ${num}`;
    const result = isEven(num);

    console.log(question);

    const answer = readlineSync.question('Your answer: ');
    const outputIfRight = 'Correct!';
    const outputIfWrong = `'${answer}' is wrong answer ;( Correct answer was '${result}'.\nLet's try again, ${userName}!`;

    if (answer === result) {
      console.log(outputIfRight);
    } else {
      console.log(outputIfWrong);
      return;
    }
    i += 1;
  }
  console.log(congratulations);
};
