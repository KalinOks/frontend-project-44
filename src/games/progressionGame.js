import {
  MIN_RANGE, MAX_RANGE, getRandomInt, playGame,
} from '../index.js';

const makeProgression = (firstNumber, quantityOfNumbers, step) => {
  const progressNumbers = [];

  for (let i = 0; i < quantityOfNumbers; i += 1) {
    progressNumbers.push(firstNumber + i * step);
  }

  return progressNumbers;
};

const generateTask = () => {
  const firstNumber = getRandomInt(MAX_RANGE, MIN_RANGE);
  const quantityOfNumbers = getRandomInt(11, 7);
  const step = getRandomInt(5, 2);

  const progression = makeProgression(firstNumber, quantityOfNumbers, step);
  const hiddenNumberIndex = getRandomInt(2, quantityOfNumbers - 1);
  const hiddenNumber = progression[hiddenNumberIndex];
  progression[hiddenNumberIndex] = '..';
  const progressString = progression.join(' ');

  return [progressString, hiddenNumber.toString()];
};

export default () => {
  const questionText = 'What number is missing in the progression?';

  playGame(questionText, generateTask);
};
