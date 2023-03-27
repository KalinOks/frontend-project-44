import {
  MIN_RANGE, MAX_RANGE, TRIES, getRandomInt, playGame,
} from '../index.js';

const makeProgress = () => {
  const firstNumber = getRandomInt(MAX_RANGE, MIN_RANGE);
  const quantityOfNumbers = getRandomInt(11, 7);
  const step = getRandomInt(5, 2);
  const progressNumbers = [];

  for (let i = 0; i < quantityOfNumbers; i += 1) {
    progressNumbers.push(firstNumber + i * step);
  }
  const hiddenNumberIndex = getRandomInt(2, quantityOfNumbers - 1);
  const hiddenNumber = progressNumbers[hiddenNumberIndex];
  progressNumbers[hiddenNumberIndex] = '..';
  const progressString = progressNumbers.join(' ');

  return [progressString, hiddenNumber.toString()];
};

export default () => {
  const gameLevels = [];
  const questionText = 'What number is missing in the progression?';

  for (let i = 0; i < TRIES; i += 1) {
    const [task, correctAnswer] = makeProgress();

    gameLevels.push([task, correctAnswer]);
  }
  playGame(questionText, gameLevels);
};
