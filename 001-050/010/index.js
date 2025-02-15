function itsPrime(num) {
  for (let i = 2; i <= num ** 0.5; i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}

let sum = 0

for (let i = 2; i < 2000000; i++) {
  if (itsPrime(i)) {
    sum += i
    console.log(i)
  }
}

console.log(sum)
