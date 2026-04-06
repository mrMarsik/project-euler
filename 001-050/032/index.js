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


const mainSet = new Set()
main: for (let i = 0; i < 10000; i++) {
  for (let j = 0; j < 10000; j++) {
    const num = i*j
    if (num > 10000) continue main
    if (checkPandigital([i, j, num])) {
      mainSet.add(num)
    }
  }
}

let sum = 0
for (num of mainSet) {
  sum += num
}
console.log(sum)