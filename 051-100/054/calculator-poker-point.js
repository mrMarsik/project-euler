export class CalculatorPokerPoint {
  #order = {
    '2' : 2,
    '3' : 3,
    '4' : 4,
    '5' : 5,
    '6' : 6,
    '7' : 7,
    '8' : 8,
    '9' : 9,
    'T' : 10,
    'J' : 11,
    'Q' : 12,
    'K' : 13,
    'A' : 14,
  }


  run(hand) {
    return this.checkStraightFlush(hand) || 
           this.checkFourOfKind(hand) || 
           this.checkFullHouse(hand) || 
           this.checkFlush(hand) ||
           this.checkStraight(hand) ||
           this.checkThreeOfKind(hand) ||
           this.checkPairs(hand) ||
           this.highCard(hand)
  }


  #createArrValues(hand) {
    const arrValues = []

    for (const card of hand) {
      const index = card.value
      arrValues.push(this.#order[index])
    }

    return arrValues.sort((a, b) => a - b)
  }


  #checkTheSameSuit(hand) {
    const sampleSuit = hand[0].suit

    for (const card of hand) {
      if (card.suit != sampleSuit) {
        return false
      }
    }

    return true
  }


  checkStraightFlush(hand) {
    if (!this.#checkTheSameSuit(hand)) {
      return false
    }

    const arrValues = this.#createArrValues(hand)

    let sum = 0
    for (const card of hand) {
      const index = card.value
      sum += this.#order[index]
    }

    
    const firstCard = arrValues[0]

    for (let i = 0; i < 5; i++) {
      if (arrValues[i] != firstCard + i) {
        return false
      }
    }

  
    return sum * 500_000_000

  }


  checkFourOfKind(hand) {
    const arrValues = this.#createArrValues(hand)
    
    
    if (arrValues[0] == arrValues[1] &&
      arrValues[1] == arrValues[2] &&
      arrValues[2] == arrValues[3] 
    ) {
      return ((arrValues[0] * 4 * 150_000_000) + arrValues[4])
    }

    if (arrValues[1] == arrValues[2] &&
      arrValues[2] == arrValues[3] &&
      arrValues[3] == arrValues[4] 
    ) {
      return ((arrValues[4] * 4 * 150_000_000) + arrValues[0])
    }
    

    return false
  }


  checkFullHouse(hand) {
    const arrValues = this.#createArrValues(hand)

    if (arrValues[0] == arrValues[1] &&
      arrValues[1] == arrValues[2] &&
      arrValues[3] == arrValues[4] 
    ) {
      return (((arrValues[0] * 3 + arrValues[4] * 2) * 15_000_000))
    }

    if (arrValues[0] == arrValues[1] &&
      arrValues[2] == arrValues[3] &&
      arrValues[3] == arrValues[4] 
    ) {
      return (((arrValues[0] * 2 + arrValues[4] * 3) * 15_000_000))
    }


    return false
  }


  checkFlush(hand) {
    const arrValues = this.#createArrValues(hand)

    if (this.#checkTheSameSuit(hand)){
      let sum = 0

      for (const value of arrValues) {
        sum += value
      }

      return sum * 2_500_000
    }

    return false
  }


  checkStraight(hand) {
    const arrValues = this.#createArrValues(hand)

    let sum = 0

    for (const value of arrValues) {
      sum += value
    }

    const firstCard = arrValues[0]

    for (let i = 0; i < 5; i++) {
      if (arrValues[i] != firstCard + i) {
        return false
      }
    }

  
    return sum * 500_000
  }


  checkThreeOfKind(hand) {
    const arrValues = this.#createArrValues(hand)
    
    if (arrValues[0] == arrValues[1] &&
      arrValues[1] == arrValues[2]
    ) {
      return ((arrValues[0] * 3 * 150_000) + arrValues[3] + arrValues[4])
    }

    if (arrValues[2] == arrValues[3] &&
      arrValues[3] == arrValues[4] 
    ) {
      return ((arrValues[4] * 3 * 150_000) + arrValues[0] + arrValues[1])
    }

    if (arrValues[1] == arrValues[2] &&
      arrValues[2] == arrValues[3] 
    ) {
      return ((arrValues[1] * 3 * 150_000) + arrValues[0] + arrValues[4])
    }
    

    return false
  }


  checkPairs(hand) {
    let arrValues = this.#createArrValues(hand)
    let sum = 0
    let sum2 = 0

    while (arrValues.length > 0) {
      const currentCard = arrValues[0]
      arrValues = arrValues.slice(1)

      if(arrValues.includes(currentCard)) {
        arrValues = arrValues.filter(value => value != currentCard)
        sum += currentCard * 2 * 15000
      } else {
        sum2 += currentCard
      }
    }

    if (sum > 0) {
      return sum + sum2
    }

    return false
  }

  highCard(hand) {
    const arrValues = this.#createArrValues(hand)

    return arrValues[4] * 100 + arrValues[3] + arrValues[2] * 0.01 + arrValues[1] * 0.0001 + arrValues[0] * 0.000001
  }
}