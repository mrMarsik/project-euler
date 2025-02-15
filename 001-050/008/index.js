const fs = require('fs')

const file = fs.readFileSync('number', 'utf-8')

const numArr =
  file
  .replace(/\s+/g, '')
  .split('')

console.log(numArr.length)

let result = 0

for (let i = 0; i < numArr.length; i++) {
  let mult = 1
  for (let j = 0; j < 13; j++) {
    mult *= numArr[i+j]
  }
  
  if (mult > result) {
    result = mult
  }
}

console.log(result)

// numArr.forEach(i => console.log(i))