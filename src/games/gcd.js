import readlineSync from 'readline-sync';
import { playGame } from '../index.js';
import getRandomNumber from '../utils.js';

function calculateGcd(firstNum, secondNum) {
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

function playGcdGameRound() {
  const firstNum = getRandomNumber(0, 100);
  const secondNum = getRandomNumber(0, 100);
  const userAnswer = readlineSync.question(`Question: ${firstNum} ${secondNum}\nYour answer:`);
  return { userAnswer, expectedAnswer: calculateGcd(firstNum, secondNum) };
}

export default function playGcdGame() {
  const rules = 'Find the greatest common divisor of given numbers.';
  playGame(playGcdGameRound, rules);
}
