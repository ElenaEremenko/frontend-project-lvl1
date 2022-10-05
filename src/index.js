import readlineSync from 'readline-sync';

const playAnyGame = (terms, getPairQA) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(terms);

  let round = 1;
  while (round <= 3) {
    const pair = getPairQA();
    const question = pair[0];
    const result = pair[1];
    console.log(question);

    const answer = readlineSync.question('Your answer: ');

    if (answer === result) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;( Correct answer was '${result}'.\nLet's try again, ${userName}!`);
      return;
    }
    round += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playAnyGame;
