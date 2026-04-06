function checkPrimeNum(n) {
  if (n < 2) return false

  for (let i = 2; i <= n ** 0.5; i++) {
    if (n % i == 0) return false
  }   

  return true
}

function checkTruncatable(n) {
  const numArrR = n.toString().split('')
  const numArrL = n.toString().split('')


  while (numArrR.length > 0) {
    if (!checkPrimeNum(numArrR.join(''))) {
      return false
    }
    numArrR.pop()
  }

  while (numArrL.length > 0) {
    if (!checkPrimeNum(numArrL.join(''))) {
      return false
    }
    numArrL.shift()
  }


  return true
}

let count = 0
let sum = 0


for (let i = 10; count < 11; i++) {
  if (checkTruncatable(i)) {
    count ++
    sum += i
  }
}

console.log(sum)