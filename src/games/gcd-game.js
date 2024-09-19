import {
  playGame,
  checkIsAnswerCorrect,
  getAnswerOnQuestion,
  getRandomIntFromInterval,
  showGameRules,
} from '../index.js';

const minNum = 0;
const maxNum = 100;

function playGcdGameRound() {
  const firstNum = getRandomIntFromInterval(minNum, maxNum);
  const secondNum = getRandomIntFromInterval(minNum, maxNum);
  const userAnswer = getAnswerOnQuestion(`${firstNum} ${secondNum}`);
  return checkIsAnswerCorrect(userAnswer, calculateGsd(firstNum, secondNum));
}

function calculateGsd(firstNum, secondNum) {
  let first = firstNum;
  let second = secondNum;
  while (first !== 0 && second !== 0) {
    if (first > second) {
      first %= second;
    } else {
      second %= first;
    }
  }
  return first + second;
}

export default function playGsdGame(userName) {
  showGameRules('Find the greatest common divisor of given numbers.');
  playGame(userName, playGcdGameRound);
}
