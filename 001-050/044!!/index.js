function createPentagonNum(n) {
  return (n * (3 * n - 1) / 2)
}

const arr = []
for (let i = 1; i < 10000; i++) {
  arr.push(createPentagonNum(i))
}

let result = Infinity

for (numK of arr) {
  for (numJ of arr) {
    
    if (arr.includes(numK + numJ)) {

      if (arr.includes(Math.max(numK, numJ) - Math.min(numK, numJ))) {
        console.log(Math.max(numK, numJ) - Math.min(numK, numJ))
        if (Math.max(numK, numJ) - Math.min(numK, numJ) < result) {
          result = (Math.max(numK, numJ) - Math.min(numK, numJ))
        }
      }
    }
  }
}

console.log(result)