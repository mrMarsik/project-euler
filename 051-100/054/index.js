import { CalculatorPokerPoint } from './calculator-poker-point.js'
import { readFileSync } from 'fs'

const file = readFileSync('cards-txt', 'utf-8')
const data = file.split('\n')


const cards = []

for (const row of data) {
  const hand1 = row.split(' ').slice(0,5)
  const hand2 = row.split(' ').slice(5)
  let hand1Obg = []
  let hand2Obg = []

  for (const card of hand1) {
    let obg = {
      value : card[0],
      suit : card[1],
    }
    hand1Obg.push(obg)
  }

  for (const card of hand2) {
    let obg = {
      value : card[0],
      suit : card[1],
    }
    hand2Obg.push(obg)
  }

  cards.push([hand1Obg, hand2Obg])
}



const calculatorPoint = new CalculatorPokerPoint()


let player1Wins = 0
for (const hands of cards) {
  const score1 = calculatorPoint.run(hands[0])
  const score2 = calculatorPoint.run(hands[1])


  if (score1 > score2) {
    player1Wins ++
  }
}


console.log(player1Wins)

