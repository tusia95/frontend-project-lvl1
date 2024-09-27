import readlineSync from 'readline-sync';

const roundsCount = 3;

export default function playGame(generateRound, description) {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 1; i <= roundsCount; i += 1) {
    const { question, expectedAnswer } = generateRound();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer:`);
    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer. Correct answer was "${expectedAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
