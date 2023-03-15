import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('May I have your name? ');

export default () => {
  console.log('Welcome to the Brain Games!');

  const name = askName();

  console.log(`Hello, ${name}!`);

  return name;
};
