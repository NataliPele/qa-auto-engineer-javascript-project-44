import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

function getGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function generateRound() {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGCD(num1, num2));
  return [question, correctAnswer];
}

export default () => runGame(description, generateRound);
