import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const operators = ['-', '+', '*'];

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default: throw new Error(`Operator ${operator} is unknown`);
  }
};

const playCalcGameRound = () => {
  const number1 = getRandomNumber(0, 20);
  const number2 = getRandomNumber(0, 20);
  const operatorIndex = getRandomNumber(0, operators.length - 1);
  const operator = operators[operatorIndex];
  const question = `${number1} ${operator} ${number2}`;
  return { question, expectedAnswer: String(calculate(number1, number2, operator)) };
};

export default function playCalcGame() {
  const gameDescription = 'What is the result of the expression?';
  playGame(playCalcGameRound, gameDescription);
}
