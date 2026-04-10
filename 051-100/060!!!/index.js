function checkPrimeNum(n) {
  if (n < 2) return false

  for (let i = 2; i <= n ** 0.5; i++) {
    if (n % i == 0) return false
  }   

  return true
}


function nextPrime(n) {
  while (true) {
    n++
    if (checkPrimeNum(n)) return n
  }
}


function checkPairSets(arr) {
  for (const numA of arr) {
    const newArr = arr.filter(elem => elem != numA)

    for (const numB of newArr) {
      if (!checkPrimeNum(numA.toString() + numB.toString())) {
        return false
      }

      if (!checkPrimeNum(numB.toString() + numA.toString())) {
        return false
      }
    }
  }


  return true
}

const arrPrime = [2, 3, 5, 7]
let currentNum = 11

a: while (true) {
  let newArr = arrPrime.slice()

  for (const a of newArr) {
    for (const b of newArr) {
      for (const c of newArr) {
        for (const d of newArr) {
          let checkArr = [a, b, c, d]
          let set = new Set(checkArr)
          if (set.size != 4) continue
          
          
          if (checkPairSets(checkArr)) {
            console.log(a + b + c + d + currentNum)
            console.log(checkArr)
            break a
          }
        }
      }
    }
  }
  
  arrPrime.push(currentNum)
  currentNum = nextPrime(currentNum)

  console.log(currentNum)
}

console.log(checkPairSets([3, 7, 109, 673]))

console.log(arrPrime)





// while (true) {
//   currentNum = nextPrime(currentNum)
//   if (arrPrime.includes(currentNum)) continue
  
//   if (checkPairSets([currentNum, ...arrPrime ])) {
//     console.log(arrPrime, currentNum)
//   }
// }