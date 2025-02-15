function fibonacciNumber() {
  let count = 3
  let a = 1n
  let b = 2n
  while (true) {
    b = a + b
    a = b - a
    count++
    const str = b.toString()
    if (str.length >= 1000) {
      break
    }
  }
  return count
}

console.log(fibonacciNumber())