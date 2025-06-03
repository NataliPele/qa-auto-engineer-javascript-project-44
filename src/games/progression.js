import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
    const result = [];
    for (let i = 0; i < length; i += 1) {
        result.push(start + i * step);
    }
    return result;
};

const generateRound = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5; // NOSONAR // от 5 до 10
  const start = Math.floor(Math.random() * 20); // NOSONAR // начальное значение
  const step = Math.floor(Math.random() * 10) + 1; // NOSONAR // шаг от 1 до 5

  const progression = getProgression(start, step, progressionLength);
  const hiddenIndex = Math.floor(Math.random() * progression.length); // NOSONAR
  const correctAnswer = String(progression[hiddenIndex]);

  const questionArray = progression.map((num, idx) => (idx === hiddenIndex ? '..' : num));
  const question = questionArray.join(' ');

  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);
