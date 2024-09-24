import {
  getYesNoAnswer,
  playGame,
} from '../index.js';
import getRandomNumber from '../utils.js';

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
  const numberToCheck = getRandomNumber(0, 100);
  const expectedAnswer = getYesNoAnswer(isPrime(numberToCheck));
  return { question: numberToCheck, expectedAnswer };
}

export default function playPrimeGame() {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(playPrimeGameRound, gameDescription);
}
