function collatzSequence(n) {
  let count = 1
  while (n != 1) {
    if (n % 2 == 0) {
      n /= 2
    } else {
      n = n * 3 + 1
    }
    count ++
  }
  return count
}

let result = 0
let resultCount = 0

for (let i = 1; i < 1000000; i++) {
  let count = collatzSequence(i)
  if (count > resultCount) {
    result = i
    resultCount = count
  }
}

console.log(result)