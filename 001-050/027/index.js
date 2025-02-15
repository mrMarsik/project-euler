function itsPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}

let maxCount = 0
let maxCountA
let maxCountB

for (let a = -1000; a < 1000; a++) {
  for (let b = -1000; b <= 1000; b++) {
    let n = 0
    let count = 0
    while (true) {
      let number = (n ** 2) + (a * n) + b
      if (number <= 0) {
        break
      }
      if (itsPrime(number)) {
        count ++
        n ++
      } else {
        break
      }
    }
    if (count > maxCount) {
      maxCount = count
      maxCountA = a
      maxCountB = b
    }
  }
}

console.log(maxCountA * maxCountB)