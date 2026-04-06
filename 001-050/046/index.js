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


a: for (let i = 3; true; i += 2) {
  if (checkPrimeNum(i)) continue
  
  let num = 0
  let prime = 2
  let square = 1

  while (num < i) {

    while (num < i) {

      num = prime + (square ** 2) * 2
      if (num == i) {
        continue a
      }

      prime = nextPrime(prime)
    }

    square++
    prime = 2
    num = prime + (square ** 2) * 2

    if (num > i) {
      console.log(i)
      break a
    }
  }
}