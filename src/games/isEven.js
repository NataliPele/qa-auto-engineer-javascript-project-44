const isEven = num => num % 2 === 0

const generateRound = () => {
  const number = Math.floor(Math.random() * 100) // NOSONAR
  const question = String(number)
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return [question, correctAnswer]
}

export default generateRound
