function checkRightAngle(arr) {
  arr = arr.sort()

  const a = arr[0]
  const b = arr[1]
  const c = arr[2]

  if (a * a + b * b == c * c) return true
  
  return false
}


let resultArr = []
let p = 0

for (let a = 1; a <= 500; a++) {
  n: for (let b = 1; b <= 500; b++) {
    for (let c = 1; c <= 500; c++) {
      if (a + b + c > 1000) {
        continue n
      }

      if (checkRightAngle([a, b, c])) {
        if (resultArr[a + b + c]) {
          resultArr[a + b + c]++
        } else resultArr[a + b + c] = 1          
      }
    }
  }
}


let max = 0
let maxI = 0

for (let i = 1; i <= 1000; i++) {
  if (resultArr[i] > max) {
    max = resultArr[i]
    maxI = i
  }
}

console.log(maxI)
