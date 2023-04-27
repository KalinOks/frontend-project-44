import {
  MIN_RANGE, MAX_RANGE, playGame,
} from '../index.js';

import getRandomInt from '../utils.js';

const SIGNS = ['+', '-', '*'];

const getRandomSign = (signs) => {
  const index = getRandomInt(0, signs.length - 1);

  return signs[index];
};

const calculate = (oneNumber, twoNumber, sign) => {
  switch (sign) {
    case '+':
      return oneNumber + twoNumber;

    case '-':
      return oneNumber - twoNumber;

    case '*':
      return oneNumber * twoNumber;

    default:
      throw new Error('Incorrect sign!');
  }
};

const generateTask = () => {
  const firstNumber = getRandomInt(MAX_RANGE, MIN_RANGE);
  const secondNumber = getRandomInt(MAX_RANGE, MIN_RANGE);
  const sign = getRandomSign(SIGNS);

  const task = (`${firstNumber} ${sign} ${secondNumber}`);
  const correctAnswer = calculate(firstNumber, secondNumber, sign).toString();

  return [task, correctAnswer];
};

export default () => {
  const questionText = 'What is the result of the expression?';

  playGame(questionText, generateTask);
};
