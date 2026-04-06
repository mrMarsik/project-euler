function checkPrimeNum(n) {
  for (let i = 2; i <= n ** 0.5; i++) {
    if (n % i == 0) return false
  }   

  return true
}

function checkCircularPrime(n) {
  const numArr = n.toString().split('')

  for (let i = 0; i < numArr.length; i++) {
    numArr.push(numArr.shift())

    if (numArr[0] == '0') return false
    
    let circNum = +numArr.join('')
    if(!checkPrimeNum(circNum)) return false
  }

  return true
}

let count = []

for (let i = 2; i < 1000000; i++) {
  
  if (checkCircularPrime(i)) {
    
    count.push(i) 
  }
}

console.log(count.length)