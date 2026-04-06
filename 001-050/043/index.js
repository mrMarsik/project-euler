function checkPandigital(num) {
  const numArr = num.toString().split('')
    
  for (let i = 0; i <= 9; i++) {
    if (!numArr.includes(i.toString())) return false
  }

  return true
}


function checkDivisibility(num) {
  // console.log(num)
  const arr = num.toString().split('')

  if ((arr[1] + arr[2] + arr[3]) % 2 != 0) return false
  if ((arr[2] + arr[3] + arr[4]) % 3 != 0) return false
  if ((arr[3] + arr[4] + arr[5]) % 5 != 0) return false
  if ((arr[4] + arr[5] + arr[6]) % 7 != 0) return false
  if ((arr[5] + arr[6] + arr[7]) % 11 != 0) return false
  if ((arr[6] + arr[7] + arr[8]) % 13 != 0) return false
  if ((arr[7] + arr[8] + arr[9]) % 17 != 0) return false

  return true
}


function rec(str, arr) {
  if (arr.length == 0) {
    if (checkPandigital(str)) {
      if (checkDivisibility(str)) {
        sum += +str
      }
    }
  } else {
    for(i of arr) {
      rec(str + i, arr.filter(item => item != i))
    }
  }
}



let sum = 0
rec('', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

console.log(sum)

