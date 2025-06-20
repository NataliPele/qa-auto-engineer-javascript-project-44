import runGame from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = num => num % 2 === 0

const generateRound = () => {
  const number = Math.floor(Math.random() * 100) // NOSONAR
  const question = String(number)
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return [question, correctAnswer]
}

export default () => runGame(description, generateRound)
