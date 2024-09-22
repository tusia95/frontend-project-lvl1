import readlineSync from 'readline-sync';
import {
  getYesNoAnswer,
  playGame,
} from '../index.js';
import getRandomNumber from '../utils.js';

const minNum = 2;
const maxNum = 100;

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function playPrimeGameRound() {
  const numberToCheck = getRandomNumber(minNum, maxNum);
  const userAnswer = readlineSync.question(`Question: ${numberToCheck}\nYour answer:`);
  const expectedAnswer = getYesNoAnswer(isPrime(numberToCheck));
  return { userAnswer, expectedAnswer };
}

export default function playPrimeGame() {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(playPrimeGameRound, rules);
}
