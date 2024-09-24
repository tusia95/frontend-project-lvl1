import readlineSync from 'readline-sync';

const roundsCount = 3;

export function isAnswerCorrect(userAnswer, expectedAnswer) {
  const isCorrect = userAnswer === expectedAnswer;
  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer. Correct answer was "${expectedAnswer}"`);
  }
  return isCorrect;
}

export function playGame(playGameRoundFunc, description) {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 1; i <= roundsCount; i += 1) {
    const { question, expectedAnswer } = playGameRoundFunc();
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

export function getYesNoAnswer(answer) {
  return answer === true ? 'yes' : 'no';
}
