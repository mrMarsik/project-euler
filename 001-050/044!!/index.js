function createPentagonNum(n) {
  return (n * (3 * n - 1) / 2)
}

const arr = []
for (let i = 1; i < 10000; i++) {
  arr.push(createPentagonNum(i))
}

// console.log(createPentagonNum(2000))
let result = Infinity

for (numK of arr) {
  for (numJ of arr) {
    
    if (arr.includes(numK + numJ)) {
      let difference = Math.max(numK, numJ) - Math.min(numK, numJ)
      if (arr.includes(difference)) {
        console.log(difference)
        if (difference < result) {
          result = difference
        }
      }
    }
  }
}

console.log(result)