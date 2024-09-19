import {
  playGame,
  checkIsAnswerCorrect,
  getAnswerOnQuestion,
  getRandomIntFromInterval,
  showGameRules,
} from '../index.js';

const minNum = 0;
const maxNum = 20;
const arithmeticalActions = ['-', '+', '*'];

function playCalcGameRound() {
  const firstNum = getRandomIntFromInterval(minNum, maxNum);
  const secondNum = getRandomIntFromInterval(minNum, maxNum);
  const actionIndex = getRandomIntFromInterval(0, arithmeticalActions.length - 1);
  const action = arithmeticalActions[actionIndex];
  const strToCalc = firstNum + ' '+ action + ' ' + secondNum;
  const userAnswer = getAnswerOnQuestion(strToCalc);
  return checkIsAnswerCorrect(userAnswer, calculate(strToCalc));
}

function calculate(stringToCalc) {
  return eval(stringToCalc);
}

export default function playCalcGame(userName) {
  showGameRules('What is the result of the expression?');
  playGame(userName, playCalcGameRound);
}

