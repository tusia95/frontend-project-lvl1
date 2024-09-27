import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const calculateGcd = (firstNum, secondNum) => {
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
};

const playGcdGameRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const question = `${number1} ${number2}`;
  return { question, expectedAnswer: String(calculateGcd(number1, number2)) };
};

export default function playGcdGame() {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  playGame(playGcdGameRound, gameDescription);
}
