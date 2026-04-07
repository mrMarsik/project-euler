function checkPrimeNum(n) {
  if (n < 2) return false

  for (let i = 2; i <= n ** 0.5; i++) {
    if (n % i == 0) return false
  }   

  return true
}


function checkPermutations(a, b, c) {
  a = a.toString().split('').sort().join('')
  b = b.toString().split('').sort().join('')
  c = c.toString().split('').sort().join('')

  if (a == b && b == c) return true

  return false
}


let result

for (let i = 1000; i < 10000; i++) {
  for (let j = 1; j < 10000; j++) {
    if (!checkPrimeNum(i)) continue
    if (!checkPrimeNum(i + j)) continue
    if (!checkPrimeNum(i + 2 * j)) continue

    if (checkPermutations(i, i + j, i + 2 * j)) {
      result = [i, i + j, i + 2 * j].join('')
    }
  }
}


console.log(result)