function getChainsLength(num) {
  const chainsArr = [num]
  let currentNum = num
  while (true) {
    currentNum = getFactorialSum(currentNum)

    if (chainsArr.includes(currentNum)) {
      return chainsArr.length
    }

    chainsArr.push(currentNum)
  }
}


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


let mainCount = 0

for (let i = 1; i < 1_000_000; i++) {
  if (getChainsLength(i) == 60) {
    mainCount++
  }
  
}

console.log(mainCount)