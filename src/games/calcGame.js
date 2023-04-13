import {
  MIN_RANGE, MAX_RANGE, getRandomInt, playGame,
} from '../index.js';

const getRandomSign = () => {
  const SIGN = ['+', '-', '*'];

  const index = getRandomInt(0, SIGN.length - 1);

  return SIGN[index];
};

const calculate = (oneNumber, twoNumber, signs) => {
  switch (signs) {
    case '+':
      return oneNumber + twoNumber;

    case '-':
      return oneNumber - twoNumber;

    case '*':
      return oneNumber * twoNumber;

    default:
      return null;
  }
};

const generateTask = () => {
  const firstNumber = getRandomInt(MAX_RANGE, MIN_RANGE);
  const secondNumber = getRandomInt(MAX_RANGE, MIN_RANGE);
  const sign = getRandomSign();

  const task = (`${firstNumber} ${sign} ${secondNumber}`);
  const correctAnswer = calculate(firstNumber, secondNumber, sign).toString();

  return [task, correctAnswer];
};

export default () => {
  const questionText = 'What is the result of the expression?';

  playGame(questionText, generateTask);
};
