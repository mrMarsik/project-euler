const fs = require('fs')

const file = fs.readFileSync('numbers', 'utf-8')

let numArr =
  file
  .split('\n')
  .join(' ')
  .split(' ')

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i][0] == '0') {
    numArr[i] = numArr[i][1]
  }
}  

let result = 0

for (let i = 0; i < 17; i++) {
  for (let j = 0; j < 20; j++) {
    const mult = numArr[i*20 + j] * numArr[i*20 + j + 20] * numArr[i*20 + j + 40] * numArr[i*20 + j + 60]
    if (mult > result) result = mult
  }
}

for (let i = 0; i < 20; i++) {
  for (let j = 0; j < 17; j++) {
    const mult = numArr[i*20 + j] * numArr[i*20 + j + 1] * numArr[i*20 + j + 2] * numArr[i*20 + j + 3]
    if (mult > result) result = mult
  }
}

for (let i = 0; i < 17; i++) {
  for (let j = 0; j < 17; j++) {
    const mult = numArr[i*20 + j] * numArr[i*20 + j + 21] * numArr[i*20 + j + 42] * numArr[i*20 + j + 63]
    if (mult > result) result = mult
  }
}

for (let i = 0; i < 17; i++) {
  for (let j = 0; j < 17; j++) {
    const mult = numArr[i*20 + j + 3] * numArr[i*20 + j + 22] * numArr[i*20 + j + 41] * numArr[i*20 + j + 60]
    if (mult > result) result = mult
  }
}

console.log(result)

