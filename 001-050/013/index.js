const fs = require('fs')

const file = fs.readFileSync('numbers', 'utf-8')

const numArr =
  file
  .split('\n')

let sum = BigInt(0)

for (const number of numArr) {
  sum += BigInt(number)
}

sum = sum.toString().slice(0,10)
console.log(sum)