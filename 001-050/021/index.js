let amicableNumArr = []

function sumDivisors(num) {
  let sum = 1
  for (let i = 2; i < num ** 0.5; i++) {
    if (num % i == 0) {
      sum += (i + num / i)
    }
  }
  
  if (num % num ** 0.5 == 0) sum += num ** 0.5
  return (sum)
}

for (let i = 3; i < 10000; i++) {
  if (
    sumDivisors(i) != i && 
    i == sumDivisors(sumDivisors(i)) &&
    !amicableNumArr.includes(i)
  ) {
    amicableNumArr.push(i)
    amicableNumArr.push(sumDivisors(i))
  }
}

let result = 0
for (const i of amicableNumArr) {
  result += i
}

console.log(result)