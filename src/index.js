import readlineSync from 'readline-sync';
import start from './cli.js';

export const MIN_RANGE = 1;
export const MAX_RANGE = 30;
export const TRIES = 3;

const SIGN = ['+', '-', '*'];

export const getRandomInt = (max, min) => Math.floor(Math.random() * (max - min)) + min;

export const getRandomSign = () => {
  const index = getRandomInt(0, SIGN.length - 1);
  return SIGN[index];
};

export const askAnswer = (task) => {
  console.log(`Question: ${task}`);

  return readlineSync.question('Your answer: ').toLowerCase();
};

export const checkAnswer = (answer, correctAnswer) => {
  let isSuccess = true;

  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    isSuccess = false;
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }

  return isSuccess;
};

export const isEndWords = (isSuccess, name) => {
  if (isSuccess) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export const playGame = (gameQuestion, levels) => {
  const name = start();
  let isSuccess;

  console.log(gameQuestion);

  for (let i = 0; i < levels.length; i += 1) {
    const [task, correctAnswer] = levels[i];

    const answer = askAnswer(task);

    isSuccess = checkAnswer(answer, correctAnswer);
    if (!isSuccess) { break; }
  }
  isEndWords(isSuccess, name);
};
