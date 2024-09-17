import readlineSync from 'readline-sync';

const minNum = 1;
const maxNum = 1000;
const gayNumForWin = 3;

export default function playEvenGame(userName) {
  showGameRules();
  let counter = 0
  while (counter < gayNumForWin) {
    if (!playGameRound()) {
      console.log(`Let's try again, ${userName}!`);
      break;
    } else counter += 1;
  }
  if(counter === gayNumForWin) {
    console.log(`Congratulations, ${userName}!`)
  }
}

function playGameRound() {
  const randomNum = randomIntFromInterval(minNum, maxNum);
  const userAnswer = readlineSync.question(`Question: ${randomNum}\nyYour answer:`);
  let expectedAnswer;
  if (checkNumIsEven(randomNum)) {
    expectedAnswer = 'yes'
  } else {
    expectedAnswer = 'no'
  }
  const isCorrect = isCorrectAnswer(userAnswer, expectedAnswer);
  if (isCorrect) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`"${userAnswer}" is wrong answer. Correct answer was "${expectedAnswer}"`);
    return false;
  }
}

function showGameRules() {
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
}

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkNumIsEven(num) {
  return num % 2 === 0;
}

function isCorrectAnswer(userAnswer, expectedAnswer) {
  return userAnswer === expectedAnswer;
}
