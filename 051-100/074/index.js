function getFactorialSum(num) {
  const numArr = num.toString().split('')
  
  let result = 0

  for (const n of numArr) {
    result += getFactorial(n)
  }
  
  return result
}


function getFactorial(num) {
  let result = 1

  for (let i = 1; i <= num; i++) {
    result *= i
  }

  return result
}


const deadList = new Set()
const chainStats = {}



function getChainsLength(num) {
  const chainsArr = [num]
  let currentNum = num
  while (currentNum) {
    currentNum = getFactorialSum(currentNum)
    
    if (chainsArr.includes(currentNum)) {

      for (let i = 0; i < chainsArr.length - chainsArr.indexOf(currentNum) - 1; i++) {
        const index = chainsArr[i]      
      }

      return chainsArr.length
    }

    chainsArr.push(currentNum)
  }
}


const N = 60
const M = 1000000
let liveCount = 0

for (let i = 2; i < M; i++) {
  if (getChainsLength(i) == N) {
    liveCount++
  }
  
}

console.log(liveCount)
