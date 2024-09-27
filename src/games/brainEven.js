import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

const playEvenGameRound = () => {
  const num = getRandomNumber(1, 1000);
  const expectedAnswer = isEven(num) ? 'yes' : 'no';
  return { question: num, expectedAnswer };
};

export default function playEvenGame() {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(playEvenGameRound, gameDescription);
}
