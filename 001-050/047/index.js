function checkPrimeFactors(num) {
  const set = new Set()
  for (let i = 2; i <= num; i++) {
    if (!checkPrimeNum) continue

    while (num % i == 0) {
      set.add(i)
      num /= i
    }
  }
  
  return(set)
}


function checkPrimeNum(n) {
  if (n < 2) return false

  for (let i = 2; i <= n ** 0.5; i++) {
    if (n % i == 0) return false
  }   

  return true
}


for (let i = 5; true; i++) {
  
  let a = checkPrimeFactors(i)
  if (a.size != 4) {
    continue
  }

  let b = checkPrimeFactors(i + 1)
  if (b.size != 4) {
    i += 1
    continue
  }
  
  let c = checkPrimeFactors(i + 2)
  if (c.size != 4) {
    i += 2
    continue
  }

  let d = checkPrimeFactors(i + 3)
  if (d.size != 4) {
    i += 3
    continue
  }

  
  console.log(i)
  break 
}

