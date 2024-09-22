import readlineSync from 'readline-sync';

const gameForWinCount = 3;
export function isAnswerCorrect(userAnswer, expectedAnswer) {
  const isCorrect = userAnswer === String(expectedAnswer);
  if (isCorrect) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer. Correct answer was "${expectedAnswer}"`);
  return false;
}

export function playGame(playGameRoundFunc, rules) {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let i = 1; i <= gameForWinCount; i += 1) {
    const { userAnswer, expectedAnswer } = playGameRoundFunc();
    if (!isAnswerCorrect(userAnswer, expectedAnswer)) {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === gameForWinCount) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}

export function getYesNoAnswer(answer) {
  let expectedAnswer = 'no';
  if (answer) {
    expectedAnswer = 'yes';
  }
  return expectedAnswer;
}
