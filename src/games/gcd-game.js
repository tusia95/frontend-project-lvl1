import {
  playGame,
  checkIsAnswerCorrect,
  getAnswerOnQuestion,
  getRandomIntFromInterval,
  showGameRules
} from "../index.js";

const minNum = 0;
const maxNum = 100;


export default function playGsdGame(userName) {
  showGameRules('Find the greatest common divisor of given numbers.');
  playGame(userName, playGcdGameRound);
}

function playGcdGameRound() {
  const firstNum = getRandomIntFromInterval(minNum, maxNum);
  const secondNum = getRandomIntFromInterval(minNum, maxNum);
  const userAnswer = getAnswerOnQuestion(firstNum + ' ' + secondNum);
  return checkIsAnswerCorrect(userAnswer, calculateGsd(firstNum, secondNum));
}

function calculateGsd(firstNum, secondNum) {
  while (firstNum !== 0 & secondNum !== 0) {
    if (firstNum > secondNum) {
      firstNum = firstNum % secondNum;
    } else {
      secondNum = secondNum % firstNum;//наоборот
    }
  }
  return firstNum + secondNum;
}
