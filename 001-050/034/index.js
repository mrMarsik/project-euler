function factorialCalc(n) {
  let res = 1
  
  for (let i = 2; i <= n; i++) {
    res *= i
  }

  return res
}

let result = 0

for (let i = 10; i < 1000000; i++) {
  const nums = (i.toString().split(''))
  
  let sumFactorial = 0

  for (let num of nums) {
    sumFactorial += factorialCalc(num)
  }
  
  if (sumFactorial == i) {
    result += i
  }
}

console.log(result)