function checkTriangle(num) {
  let i = 1

  while (0.5 * i * (i + 1) <= num) {

    if (0.5 * i * (i + 1) == num) return true
    i++
  }

  return false
}


const fs = require('fs')

const nameFile = fs.readFileSync('words', 'utf-8')
const wordsArr =
  nameFile
  .replace(/"/g, '')
  .split(',')
  .sort()


const alphabetFile = fs.readFileSync('alphabet', 'utf-8')
const alphabetArr =
  alphabetFile
  .replace(/ /g, '')
  .split(',')
  

let count = 0

for (let word of wordsArr) {
  let sum = 0

  for (let l of word) {
    sum += (alphabetArr.indexOf(l) + 1)   
  }

  if (checkTriangle(sum)) count++
}

console.log(count)
