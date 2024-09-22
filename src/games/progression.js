import readlineSync from 'readline-sync';
import { playGame } from '../index.js';
import getRandomNumber from '../utils.js';

const progressionLength = 10;

function generateProgression(numberToAdd, startNum) {
  const progression = [startNum];
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + numberToAdd;
  }
  return progression;
}

function playProgressionGameRound() {
  const numberToAdd = getRandomNumber(2, 10);
  const startNum = getRandomNumber(1, 20);

  const progression = generateProgression(numberToAdd, startNum);
  const indexOfNumberToHide = getRandomNumber(0, progression.length - 1);
  const expectedAnswer = progression[indexOfNumberToHide];
  progression[indexOfNumberToHide] = '..';
  const userAnswer = readlineSync.question(`Question: ${progression.join(' ')}\nYour answer:`);
  return { userAnswer, expectedAnswer };
}

export default function playProgressionGame() {
  const rules = 'What number is missing in the progression?';
  playGame(playProgressionGameRound, rules);
}
