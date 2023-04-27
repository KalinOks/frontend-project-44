import readlineSync from 'readline-sync';

export const MIN_RANGE = 1;
export const MAX_RANGE = 30;
export const TRIES = 3;

export const playGame = (gameQuestion, getGameTask) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(gameQuestion);

  for (let i = 0; i < TRIES; i += 1) {
    const [task, correctAnswer] = getGameTask();

    console.log(`Question: ${task}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
