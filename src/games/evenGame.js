#!/usr/bin/env node

import {
  MIN_RANGE, MAX_RANGE, TRIES, getRandomInt, playGame,
} from '../index.js';

const isEven = (number) => (number % 2 === 0);

export default () => {
  const gameLevels = [];
  const questionText = 'Answer "yes" if the number is even, otherwise answer "no".';

  for (let i = 0; i < TRIES; i += 1) {
    const number = getRandomInt(MAX_RANGE, MIN_RANGE);
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    gameLevels.push([number, correctAnswer]);
  }

  playGame(questionText, gameLevels);
};
