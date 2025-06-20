import readlineSync from 'readline-sync'
import greetUser from './cli.js'

const roundsCount = 3

export default function runGame(gameDescription, generateRound) {
  const name = greetUser()
  console.log(gameDescription)

  for (let i = 0; i < roundsCount; i++) {
    const [question, correctAnswer] = generateRound()

    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').trim()

    // Проверка ответа юзера
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}
