#!/usr/bin/env node

import {
  MIN_RANGE, MAX_RANGE, TRIES, getRandomInt, getRandomSign, playGame,
} from '../index.js';

const calculate = (oneNumber, twoNumber, signs) => {
  let result;

  switch (signs) {
    case '+':
      result = oneNumber + twoNumber;
      break;

    case '-':
      result = oneNumber - twoNumber;
      break;

    case '*':
      result = oneNumber * twoNumber;
      break;

    default:
      break;
  }

  return result;
};

export default () => {
  const gameLevels = [];
  const questionText = 'What is the result of the expression?';

  for (let i = 0; i < TRIES; i += 1) {
    const firstNumber = getRandomInt(MAX_RANGE, MIN_RANGE);
    const secondNumber = getRandomInt(MAX_RANGE, MIN_RANGE);
    const sign = getRandomSign();

    const task = (`${firstNumber} ${sign} ${secondNumber}`);
    const correctAnswer = calculate(firstNumber, secondNumber, sign).toString();

    gameLevels.push([task, correctAnswer]);
  }

  playGame(questionText, gameLevels);
};
