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
  const question = `${firstNum} ${secondNum}`;
  return { question, expectedAnswer: String(calculateGcd(firstNum, secondNum)) };
}

export default function playGcdGame() {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  playGame(playGcdGameRound, gameDescription);
}
