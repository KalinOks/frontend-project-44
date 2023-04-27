#!/usr/bin/env node

import {
  MIN_RANGE, MAX_RANGE, playGame,
} from '../index.js';

import getRandomInt from '../utils.js';

const isEven = (number) => number % 2 === 0;

const generateTask = () => {
  const number = getRandomInt(MAX_RANGE, MIN_RANGE);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [number, correctAnswer];
};

export default () => {
  const questionText = 'Answer "yes" if the number is even, otherwise answer "no".';

  playGame(questionText, generateTask);
};
