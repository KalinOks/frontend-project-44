import {
  MIN_RANGE, MAX_RANGE, TRIES, getRandomInt, playGame,
} from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

export default () => {
  const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameLevels = [];

  for (let i = 0; i < TRIES; i += 1) {
    const number = getRandomInt(MAX_RANGE, MIN_RANGE);

    const task = (`${number}`);

    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    gameLevels.push([task, correctAnswer]);
  }
  playGame(questionText, gameLevels);
};
