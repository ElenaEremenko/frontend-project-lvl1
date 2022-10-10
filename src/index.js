import readlineSync from 'readline-sync';

const play = (terms, getRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(terms);

  let round = 1;
  const roundsCount = 3;
  while (round <= roundsCount) {
    const [question, expectedAnswer] = getRound();
    console.log(question);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;( Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    round += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default play;
