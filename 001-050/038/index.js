function checkPandigital(arr) {
  const numArr = []   
  
  for (i of arr) {    
    numArr.push(...i.toString().split(''))
  }

  if (numArr.includes('0')) return false
  if (numArr.length != 9) return false

  const set = new Set()

  for (i of numArr) {
    set.add(i)
  }

  if (set.size == 9) return true
  
  return false
}

let currentNum = []
let result = 0


for (let i = 1; i < 100000; i++) {

  let count = 3
  let mult = 1
  
  while(currentNum.length < 10) {
    currentNum.push(...(i * mult).toString().slice(''))

    if (currentNum.join('') > result) {
      console.log(currentNum)
      if (checkPandigital(currentNum)) {
        result = currentNum.join('')
      }
    }
    mult++
    count++
  }
  currentNum = []
}

console.log(result)
