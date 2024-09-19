import {
  playGame,
  checkIsAnswerCorrect,
  getAnswerOnQuestion,
  getRandomIntFromInterval,
  showGameRules,
  getYesNoAnswer,
} from '../index.js';

const minNum = 1;
const maxNum = 1000;

function playEvenGameRound() {
  const randomNum = getRandomIntFromInterval(minNum, maxNum);
  const userAnswer = getAnswerOnQuestion(randomNum);
  const expectedAnswer = getYesNoAnswer(checkNumIsEven(randomNum));
  return checkIsAnswerCorrect(userAnswer, expectedAnswer);
}

function checkNumIsEven(num) {
  return num % 2 === 0;
}

export default function playEvenGame(userName) {
  showGameRules('Answer "yes" if the number is even, otherwise answer "no".');
  playGame(userName, playEvenGameRound);
}

