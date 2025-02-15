const numberArr = new Set

for (let a = 2n; a <= 100; a++) {
  for (let b = 2n; b <= 100; b++) {
    numberArr.add(a ** b)
    numberArr.add(b ** a)
  }
}

console.log(numberArr.size)