function createNumArr(num) { 

  let numArr = []
  for (let i = 1; i <= num; i++) {
    numArr.push(i)
  }
  return numArr
}

const numArr = createNumArr(100)

let sumNumArr = 0
numArr.forEach(i => sumNumArr += i)
const squareSum = sumNumArr ** 2

let sumSquares = 0
numArr.forEach(i => sumSquares += i ** 2)

const result = squareSum - sumSquares

console.log(result)