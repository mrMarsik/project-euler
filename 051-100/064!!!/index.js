let numberRoot = 23
let numerator2 = 4
let denumerator = 0
let currentNum = 4
let nextNum = 4
let mult = 1
function createNextNum(num) {
  currentNum = nextNum
  denumerator = (numberRoot - nextNum ** 2) / mult
  numerator2 = denumerator - nextNum
  console.log('Next num:', nextNum)
  console.log('numerator2:', numerator2)
  console.log('denumerator:', denumerator)
  nextNum = numerator2
  // return denumerator
}

createNextNum(23)
// createNextNum(23)
console.log()

// createNextNum(23)

// console.log()