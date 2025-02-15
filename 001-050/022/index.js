const fs = require('fs')

const nameFile = fs.readFileSync('names', 'utf-8')
const namesArr =
  nameFile
  .replace(/"/g, '')
  .split(',')
  .sort()


const alphabetFile = fs.readFileSync('alphabet', 'utf-8')
const alphabetArr =
  alphabetFile
  .replace(/ /g, '')
  .split(',')
  
let result = 0

for (let i = 0; i < namesArr.length; i++) {
  const element = namesArr[i];
  let sum = 0
  for (let j of element) {
    sum += (alphabetArr.indexOf(j) + 1)   
  }
  sum *= (i + 1)
  result += sum
}
console.log(result)


// 92844
// 5163