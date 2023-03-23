#!/usr/bin/env node

import {
  MIN_RANGE, MAX_RANGE, TRIES, getRandomInt, playGame,
} from '../index.js';

export default () => {
  const gameLevels = [];
  const questionText = 'Answer "yes" if the number is even, otherwise answer "no".';

  for (let i = 0; i < TRIES; i += 1) {
    const number = getRandomInt(MAX_RANGE, MIN_RANGE);
    const isEven = number % 2 === 0 ? 'yes' : 'no';

    gameLevels.push([number, isEven]);
  }

  playGame(questionText, gameLevels);
};
