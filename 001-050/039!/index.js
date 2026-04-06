function checkRightAngle(arr) {
  arr = arr.sort()

  const a = arr[0]
  const b = arr[1]
  const c = arr[2]

  if (a * a + b * b == c * c) return true
  
  return false
}

let result = []
let resultArr = []
let p = 0

for (let a = 1; a <= 500; a++) {
  n: for (let b = 1; b <= 500; b++) {
    for (let c = 1; c <= 500; c++) {
      if (checkRightAngle([a, b, c])) {
        if (a + b + c <= 1000) {
          if (result[a + b + c]) {
            result[a + b + c]++
          } else result[a + b + c] = 1

          // resultArr = [a, b, c]
          
        }
        

      }
      if (a + b + c > 1000) continue n
    }
    
  }
  
}

let max = 0
let maxI = 0
for (let i = 1; i <= 1000; i++) {
  if (result[i] > max) {
    max = result[i]
    maxI = i
    
  }
  
}

console.log(maxI)
