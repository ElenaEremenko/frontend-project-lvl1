import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  const phrase = `Hello, ${userName}!`;
  console.log(phrase);
};

export default greeting;
