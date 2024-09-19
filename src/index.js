import readlineSync from 'readline-sync';

const gameNumForWin = 3;

export function playGame(userName, playGameRoundFunc) {
  let counter = 0;
  while (counter < gameNumForWin) {
    if (!playGameRoundFunc()) {
      console.log(`Let's try again, ${userName}!`);
      break;
    } else counter += 1;
  }
  if (counter === gameNumForWin) {
    console.log(`Congratulations, ${userName}!`);
  }
}

export function checkIsAnswerCorrect(userAnswer, expectedAnswer) {
  const isCorrect = userAnswer === String(expectedAnswer);
  if (isCorrect) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer. Correct answer was "${expectedAnswer}"`);
  return false;
}

export function getRandomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function showGameRules(rules) {
  console.log(rules);
}

export function getAnswerOnQuestion(question) {
  return readlineSync.question(`Question: ${question}\nYour answer:`);
}

export function getYesNoAnswer(answer) {
  let expectedAnswer = 'no';
  if (answer) {
    expectedAnswer = 'yes';
  }
  return expectedAnswer;
}
