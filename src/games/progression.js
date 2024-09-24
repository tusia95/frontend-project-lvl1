import { playGame } from '../index.js';
import getRandomNumber from '../utils.js';

function generateProgression(numberToAdd, startNum, progressionLength) {
  const progression = [startNum];
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + numberToAdd;
  }
  return progression;
}

function playProgressionGameRound() {
  const numberToAdd = getRandomNumber(2, 10);
  const startNum = getRandomNumber(1, 20);

  const progression = generateProgression(numberToAdd, startNum, 10);
  const indexOfNumberToHide = getRandomNumber(0, progression.length - 1);
  const expectedAnswer = String(progression[indexOfNumberToHide]);
  progression[indexOfNumberToHide] = '..';
  const question = progression.join(' ');
  return { question, expectedAnswer };
}

export default function playProgressionGame() {
  const gameDescription = 'What number is missing in the progression?';
  playGame(playProgressionGameRound, gameDescription);
}
