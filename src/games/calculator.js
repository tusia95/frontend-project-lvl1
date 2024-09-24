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
  const operator = arithmeticalOperators[operatorIndex];
  const question = `${firstNum} ${operator} ${secondNum}`;
  return { question, expectedAnswer: String(calculate(firstNum, secondNum, operator)) };
}

export default function playCalcGame() {
  const gameDescription = 'What is the result of the expression?';
  playGame(playCalcGameRound, gameDescription);
}
