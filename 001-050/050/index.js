function checkPrimeNum(n) {
  if (n < 2) return false

  for (let i = 2; i <= n ** 0.5; i++) {
    if (n % i == 0) return false
  }   

  return true
}


function nextPrime(n) {
  while (true) {
    n++
    if (checkPrimeNum(n)) return n
  }
}


function createArrPrime(max) {
  const arrPrime = [2]
  let prew = 2

  while (true) {
    const next = nextPrime(prew)

    if (next > max) return arrPrime

    arrPrime.push(next)
    prew = next
  }
}


const arrPrime = createArrPrime(1000000)
let maxCount = 0
let maxNum

for (let i = 0; i < arrPrime.length; i++) {
  let sum = 0
  let count = 0

  for (let j = 0; j < arrPrime.length - i; j++) {
    sum += arrPrime[i + j]

    if (sum > 1000000) break

    count ++

    if (count > maxCount) {
      if (checkPrimeNum(sum)) {
        maxCount = count
        maxNum = sum
      }
    }
  }  
}


console.log(maxNum)