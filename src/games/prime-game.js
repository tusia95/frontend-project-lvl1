import {
  checkIsAnswerCorrect,
  getAnswerOnQuestion,
  getRandomIntFromInterval, getYesNoAnswer,
  playGame,
  showGameRules,
} from '../index.js';

const minNum = 2;
const maxNum = 100;

function playPrimeGameRound() {
  const numberToCheck = getRandomIntFromInterval(minNum, maxNum);
  const userAnswer = getAnswerOnQuestion(numberToCheck);
  const expectedAnswer = getYesNoAnswer(checkNumberIsPrime(numberToCheck));
  return checkIsAnswerCorrect(userAnswer, expectedAnswer);
}

function checkNumberIsPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i+=1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

export default function playPrimeGame(userName) {
  showGameRules('Answer "yes" if given number is prime. Otherwise answer "no".');
  playGame(userName, playPrimeGameRound);
}
