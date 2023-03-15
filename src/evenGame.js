import readlineSync from 'readline-sync';
import start from './cli.js';

const MIN_RANGE = 1;
const MAX_RANGE = 20;
const TRIES = 3;

const getRandomInt = () => Math.floor(Math.random() * (MAX_RANGE - MIN_RANGE)) + MIN_RANGE;

export default () => {
  const name = start();
  let isSuccess = true;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < TRIES; i += 1) {
    const number = getRandomInt();
    const isEven = number % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ').toLowerCase();

    if (answer === isEven) {
      console.log('Correct!');
    } else {
      isSuccess = false;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.`);
      break;
    }
  }
  if (isSuccess) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
