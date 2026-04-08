function checkPalindrome(num) {
  let rev = num.toString().split('').reverse().join('')

  return (num == rev)
}


function checkLychrelNumbers(num) {
  for (let i = 0; i < 50; i++) {
    let rev = +num.toString().split('').reverse().join('')
    num += rev
    if (checkPalindrome(num)) return false
  }

  return true
}


let count = 0

for (let i = 1; i < 10000; i++) {
  if (checkLychrelNumbers(i)) {
    count++
  }
}

console.log(count)



