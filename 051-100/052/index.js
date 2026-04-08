function checkPermutedNum(arr) {
  let sample = arr[0].toString().split('').sort().join('')

  for (let num of arr) {
    num = num.toString().split('').sort().join('')

    if (sample != num) return false
  }

  return true
}

for (let i = 1; true; i++) {
  let arrNum = [i]
  for (let j = 2; j <= 6; j++) {
    arrNum.push(i * j)
  }
  if (checkPermutedNum(arrNum)) {
    console.log(arrNum[0])
    break
  }
}
