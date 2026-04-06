function checkPandigital(num) {
  const numArr = num.toString().split('')

  for (let i = 1; i <= numArr.length; i++) {
    if (!numArr.includes(i.toString())) return false
  }

  return true
}


function checkPrimeNum(n) {
  for (let i = 2; i <= n ** 0.5; i++) {
    if (n % i == 0) return false
  }   

  return true
}


function rec(str, arr) {
  if (arr.length == 0) {
    if (checkPandigital(str)) {
      if (checkPrimeNum(+str)) {
        sum = str
      }
    }
  } else {
    for(i of arr) {
      rec(str + i, arr.filter(item => item != i))
    }
  }
}


let sum = 0

for (let i = 1; i < 10; i++) {

  numArr = []

  for (let j = 1; j <= i; j++) {
    numArr.push(j) 
  }

  rec('', numArr)
}


console.log(sum)


