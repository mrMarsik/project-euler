function checkPalindrom2(n) {
  if (n.toString(2) == n.toString(2).split('').reverse().join('') 
    && n.toString() == n.toString().split('').reverse().join('') ) {
    return true
  }
  
  return false
}

let result = 0

for (let i = 0; i < 1000000; i++) {
  if (checkPalindrom2(i)) {
    result += i
  }
  
}

console.log(result)