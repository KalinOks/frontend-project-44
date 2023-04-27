import {
  MIN_RANGE, MAX_RANGE, playGame,
} from '../index.js';

import getRandomInt from '../utils.js';

const findMinDivider = (first, second) => {
  const minNumber = Math.min(first, second);
  let minDivider = 1;
  for (let i = minNumber; i > 1; i -= 1) {
    if (first % i === 0 && second % i === 0) {
      minDivider = i;
      break;
    }
  }
  return minDivider;
};

const generateTask = () => {
  const firstNumber = getRandomInt(MAX_RANGE, MIN_RANGE);
  const secondNumber = getRandomInt(MAX_RANGE, MIN_RANGE);

  const task = `${firstNumber} ${secondNumber}`;

  const correctAnswer = findMinDivider(firstNumber, secondNumber).toString();

  return [task, correctAnswer];
};

export default () => {
  const questionText = 'Find the greatest common divisor of given numbers.';

  playGame(questionText, generateTask);
};
