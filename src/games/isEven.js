import readlineSync from 'readline-sync';
import greetUser from '../cli.js';

export default function runEvenGame() {
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const isEven = (num) => num % 2 === 0;

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i++) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (answer !== 'yes' && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}
