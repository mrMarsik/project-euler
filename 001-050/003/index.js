const num = 600851475143

function itsPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}

for (let i = 3; i < num; i += 1) {
  if (num % i == 0) {
    let x = num / i
    if (itsPrime(x)) {
      console.log(x)
      break
    }
  }
}
