let maxSum = 0

for (let a = 1n; a < 100n; a++) {
  for (let b = 1n; b < 100n; b++) {
    let num = a ** b
    let arrNum = num.toString().slice('')

    let sum = 0
    for (const digit of arrNum) {
      sum += +digit
    }

    if (sum > maxSum) {
      maxSum = sum
    }
  }
}

console.log(maxSum)