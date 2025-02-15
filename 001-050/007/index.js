function itsPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}

let count = 0
let num = 2
let result = 0
while (count < 10001) {
  if (itsPrime(num)) {
    result = num
    count++
  }
  num++
}

console.log(result)
console.log(itsPrime(2))