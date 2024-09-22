import readlineSync from 'readline-sync';
import {
  playGame,
  getYesNoAnswer,
} from '../index.js';
import getRandomNumber from '../utils.js';

function isEven(num) {
  return num % 2 === 0;
}

function playEvenGameRound() {
  const randomNum = getRandomNumber(1, 1000);
  const userAnswer = readlineSync.question(`Question: ${randomNum}\nYour answer:`);
  const expectedAnswer = getYesNoAnswer(isEven(randomNum));
  return { userAnswer, expectedAnswer };
}

export default function playEvenGame() {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(playEvenGameRound, rules);
}
