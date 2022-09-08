import readlineSync from 'readline-sync';

const playAnyGame = (terms, getPairQA) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const phrase = `Hello, ${userName}!`;
  console.log(phrase);

  console.log(terms);

  const congratulations = `Congratulations, ${userName}!`;

  let round = 1;
  while (round <= 3) {
    const pair = getPairQA();
    const question = pair[0];
    const result = pair[1];
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
    round += 1;
  }
  console.log(congratulations);
};

export default playAnyGame;
