import {
  playGame,
  checkIsAnswerCorrect,
  getAnswerOnQuestion,
  getRandomIntFromInterval,
  showGameRules
} from "../index.js";

const minNum = 2;
const maxNum = 10;
const minStartNum = 1;
const maxStartNum = 20;
const progressionLength = 10;


export default function playProgressionGame(userName) {
  showGameRules('What number is missing in the progression?');
  playGame(userName, playProgressionGameRound);
}

function playProgressionGameRound() {
  const numberToAdd = getRandomIntFromInterval(minNum, maxNum)
  const progression = generateProgression(numberToAdd, minStartNum, maxStartNum, progressionLength);
  const indexOfNumberToHide = getRandomIntFromInterval(0, progressionLength - 1);
  const expectedNum = progression[indexOfNumberToHide];
  progression[indexOfNumberToHide] = '..';
  const userAnswer = getAnswerOnQuestion(progression.join(' '));
  return checkIsAnswerCorrect(userAnswer, expectedNum);
}


function generateProgression(numberToAdd, minStartNum, maxStartNum, progressionLength) {
  const startNum = getRandomIntFromInterval(minStartNum, maxStartNum);
  const progressionArr = [startNum];
  for (let i = 1; i < progressionLength; i += 1) {
    progressionArr[i] = progressionArr[i - 1] + numberToAdd;
  }
  return progressionArr;
}