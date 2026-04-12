function checkRelativelyPrimeNum(arr, b) {
  // if ((b * 1) % a == 0) return false
  // let set = new Set()
  let count = arr.length
  // console.log('a', a, 'b', b)
  for (let i = 2; i <= b; i++) {
    if (b % i == 0) {
      if (arr.includes(i)) return false
      arr.push(i)
      count++
    }


  }   

  return true
}


function countRelativelyPrimeNum(n) {

  let arr = []

  for (let i = 2; i <= Math.min(n); i++) {
    if (n % i == 0) {
      arr.push(i)
    }
  }

  let count = 0

  for (let i = 1; i < n / 2; i++) {
    
    if (checkRelativelyPrimeNum(arr, i)) {
      count++
      // arr.push(i)
    }
  }

  // console.log(n,':',arr)

  return count * 2
}


let max = 0
let maxN

for (let n = 1; n < 10; n++) {
  if (n % 1000 == 0) console.log(n)
  let f = countRelativelyPrimeNum(n)

  if (n / f > max) {
    max = n / f
    maxN = n
  }
}


console.log(maxN)

// console.log(checkRelativelyPrimeNum(new Set(1,2,3,4),10))

console.log(countRelativelyPrimeNum(288))

