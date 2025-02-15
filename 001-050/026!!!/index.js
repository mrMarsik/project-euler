
const n = 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n
const numLib = {}
for (let d = 1n; d < 1000; d++) {
  const num = n/d 
  let str = num.toString()
  
  const periodNum = periodCount(str)
  if (periodNum > 0) {
    numLib[d] = periodNum
  }
}

function periodCount(num) {
  const numArr = num.split('').reverse()
  while(true) {
    if (numArr[0] == '0') {
      numArr.shift()
    } else break
  }

  if(numArr.length < 40) return 0

  const sls = numArr.slice(0, 20).join('')

  if (num.split('').reverse().join('').indexOf(sls, 20) == -1) {
    return 0
  }
  // for (let i = 1; i < 40; i++) {
  //   const slice = numArr.slice(0, i)
  //   if (numArr.indexOf(slice)) {
  //     console.log(slice)
  //   }
  //   // numArr.splice(-i)      
  // }
  return numArr.join('')
}

console.log(numLib)