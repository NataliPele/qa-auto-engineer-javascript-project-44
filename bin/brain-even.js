#!/usr/bin/env node

import runGame from '../src/index.js'
import generateRound from '../src/games/isEven.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'
runGame(description, generateRound)
