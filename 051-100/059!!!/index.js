function checkPrimeNum(n) {
  if (n < 2) return false

  for (let i = 2; i <= n ** 0.5; i++) {
    if (n % i == 0) return false
  }   

  return true
}


let currentNum = 1
let countPrime = 0
let countAll = 1
let step = 2

while (true) {
  for (let j = 0; j < 4; j++) {
    
    currentNum += step
    
    if (checkPrimeNum(currentNum)) {
      countPrime++
    }
    
    countAll++
  }

  if (countPrime / countAll < 0.1) {
    console.log(step + 1)
    break
  }
 
  step += 2 
}

