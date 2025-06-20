import runGame from '../index.js'

const description = 'What is the result of the expression?'

const operators = ['+', '-', '*']

function generateRound() {
  const num1 = Math.floor(Math.random() * 50) // NOSONAR
  const num2 = Math.floor(Math.random() * 50) // NOSONAR
  const operator = operators[Math.floor(Math.random() * operators.length)] // NOSONAR

  const question = `${num1} ${operator} ${num2}`

  let correctAnswer
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2
      break
    case '-':
      correctAnswer = num1 - num2
      break
    case '*':
      correctAnswer = num1 * num2
      break
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }

  return [question, String(correctAnswer)]
}

export default () => runGame(description, generateRound)
