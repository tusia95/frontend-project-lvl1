import {
  playGame,
  checkIsAnswerCorrect,
  getAnswerOnQuestion,
  getRandomIntFromInterval,
  showGameRules
} from "../index.js";

const minNum = 1;
const maxNum = 1000;

export default function playEvenGame(userName) {
  showGameRules('Answer "yes" if the number is even, otherwise answer "no".');
  playGame(userName, playEvenGameRound);
}

function playEvenGameRound() {
  const randomNum = getRandomIntFromInterval(minNum, maxNum);
  const userAnswer = getAnswerOnQuestion(randomNum)
  let expectedAnswer;
  if (checkNumIsEven(randomNum)) {
    expectedAnswer = 'yes'
  } else {
    expectedAnswer = 'no'
  }
  return checkIsAnswerCorrect(userAnswer, expectedAnswer);
}

function checkNumIsEven(num) {
  return num % 2 === 0;
}


