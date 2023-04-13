import {
  MIN_RANGE, MAX_RANGE, getRandomInt, playGame,
} from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateTask = () => {
  const number = getRandomInt(MAX_RANGE, MIN_RANGE);

  const task = (`${number}`);

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [task, correctAnswer];
};

export default () => {
  const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  playGame(questionText, generateTask);
};
