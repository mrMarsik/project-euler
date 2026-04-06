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


let result = 0
let arr = [2]
let maxArr = []
let prime = 2
let maxLength = 0

a: while (true) {
  
  prime = nextPrime(prime)
  arr.push(prime)
  let sum = 0

  for (const num of arr) {
    sum += num
    
  }

  while(sum > 1000) {
    arr.shift()
    sum = 0

    for (const num of arr) {
       sum += num
    
    }
    if (arr.length < 2) break a
  }
  

  if (checkPrimeNum(sum)) {  
    if (arr.length > maxLength) {
      result = sum
      maxLength = arr.length
      maxArr = arr.slice()
    }
  }
}

console.log(result)
console.log(maxLength)
console.log(maxArr)




