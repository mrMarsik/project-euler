function createFactorial(n) {
  let res = 1

  for (let i = 2; i <= n; i++) {
    res *= i  
  }

  return res
}


function combinatoricSelections(n, r) {
  return createFactorial(n) / (createFactorial(r) * createFactorial(n - r))
}


let count = 0

for (let n = 1; n <= 100; n++) {
  for (let r = 1; r <= n; r++) {
    if (combinatoricSelections(n, r) > 1_000_000) {
      count++
    }
  }  
}


console.log(count)
