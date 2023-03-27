import {
  MIN_RANGE, MAX_RANGE, TRIES, getRandomInt, playGame,
} from '../index.js';

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

export default () => {
  const gameLevels = [];
  const questionText = 'Find the greatest common divisor of given numbers.';

  for (let i = 0; i < TRIES; i += 1) {
    const firstNumber = getRandomInt(MAX_RANGE, MIN_RANGE);
    const secondNumber = getRandomInt(MAX_RANGE, MIN_RANGE);

    const task = (`${firstNumber} ${secondNumber}`);

    const correctAnswer = findMinDivider(firstNumber, secondNumber).toString();

    gameLevels.push([task, correctAnswer]);
  }
  playGame(questionText, gameLevels);
};
