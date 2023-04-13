import readlineSync from 'readline-sync';
import start from './cli.js';

export const MIN_RANGE = 1;
export const MAX_RANGE = 30;
export const TRIES = 3;

export const getRandomInt = (max, min) => Math.floor(Math.random() * (max - min)) + min;

export const playGame = (gameQuestion, getGameTask) => {
  const name = start();
  let isSuccess = true;

  console.log(gameQuestion);

  for (let i = 0; i < TRIES; i += 1) {
    const [task, correctAnswer] = getGameTask();

    console.log(`Question: ${task}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      isSuccess = false;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
  }

  if (isSuccess) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
