import getRandomInt from '../utils.js';
import playAnyGame from '../index.js';

export const terms = 'What number is missing in the progression?';

export const getPairQA = () => {
  const QA = [];
  const getProgression = () => {
    const progression = [];
    const progressionStep = getRandomInt(1, 10);
    const firstNum = getRandomInt(0, 20);
    let num = firstNum;
    let i = 1;
    while (i <= 10) {
      progression.push(num);
      num += progressionStep;
      i += 1;
    }
    return progression;
  };

  const innerValue = getProgression();
  const randomPosition = getRandomInt(0, 9);
  const missingNum = innerValue[randomPosition];
  innerValue[randomPosition] = '..';
  const progression = innerValue.join(' ');
  const question = `Question: ${progression}`;
  QA[0] = question;
  const tempResult = missingNum;
  const result = tempResult.toString();
  QA[1] = result;
  return QA;
};

export { playAnyGame };
