import getRandomInteger from '../utils.js';
import play from '../index.js';

const terms = 'What number is missing in the progression?';
const getProgression = () => {
  const progression = [];
  const progressionStep = getRandomInteger(1, 10);
  const firstNum = getRandomInteger(0, 20);
  let num = firstNum;
  let i = 1;
  while (i <= 10) {
    progression.push(num);
    num += progressionStep;
    i += 1;
  }
  return progression;
};

const getRound = () => {
  const rawProgression = getProgression();
  const randomPosition = getRandomInteger(0, 9);
  const hiddenNum = rawProgression[randomPosition];
  rawProgression[randomPosition] = '..';
  const processedProgression = rawProgression.join(' ');
  const question = `Question: ${processedProgression}`;
  const expectedAnswer = hiddenNum.toString();
  return [question, expectedAnswer];
};

const playProgressionGame = () => {
  play(terms, getRound);
};

export default playProgressionGame;
