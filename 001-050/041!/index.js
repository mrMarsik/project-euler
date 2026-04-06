function checkPandigital(num) {
  const numArr = num.toString().split('')
  

  if (numArr.includes('0')) return false
  

  for (let i = 1; i <= numArr.length; i++) {
    if (!numArr.includes(i.toString())) return false
  }

  return true
}


function checkPrimeNum(n) {
  if (n < 2) return false

  for (let i = 2; i <= n ** 0.5; i++) {
    if (n % i == 0) return false
  }   

  return true
}


let result = 0

for (let i = 1; i <= 987654321; i += 2) {
  
  if (checkPrimeNum(i)) {
    if (checkPandigital(i)) {
      console.log(i)
      result = i
    }
  }
  
}
console.log(1)
