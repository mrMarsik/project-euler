function checkReverse(num) {
  if (num.toString() ==  
    num
    .toString()
    .split('')
    .reverse()
    .join('')
  ) return true
  return false
}

let maxNum = 0

for (let i = 999; i > 99; i--) {
  for (let j = 999; j > 99; j--) {
    let num = i * j
    if (checkReverse(num) && num > maxNum) {
      maxNum = num
    }
  }
}

console.log(maxNum)
