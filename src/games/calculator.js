import readlineSync from 'readline-sync';
import { playGame } from '../index.js';
import getRandomNumber from '../utils.js';

const arithmeticalOperators = ['-', '+', '*'];

export function calculate(number1, number2, operator) {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default: throw new Error(`Operator ${operator} is unknown`);
  }
}

function playCalcGameRound() {
  const firstNum = getRandomNumber(0, 20);
  const secondNum = getRandomNumber(0, 20);
  const operatorIndex = getRandomNumber(0, arithmeticalOperators.length - 1);
  console.log(operatorIndex);
  const operator = arithmeticalOperators[operatorIndex];
  const question = `${firstNum} ${operator} ${secondNum}`;
  const userAnswer = readlineSync.question(`Question: ${question}\nYour answer:`);
  return { userAnswer, expectedAnswer: calculate(firstNum, secondNum, operator) };
}

export default function playCalcGame() {
  const rules = 'What is the result of the expression?';
  playGame(playCalcGameRound, rules);
}
