import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const generateProgression = (numberToAdd, startNum, progressionLength) => {
  const progression = [startNum];
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + numberToAdd;
  }
  return progression;
};

const playProgressionGameRound = () => {
  const numberToAdd = getRandomNumber(2, 10);
  const startNum = getRandomNumber(1, 20);

  const progression = generateProgression(numberToAdd, startNum, 10);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const expectedAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return { question, expectedAnswer };
};

export default function playProgressionGame() {
  const gameDescription = 'What number is missing in the progression?';
  playGame(playProgressionGameRound, gameDescription);
}
