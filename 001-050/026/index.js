function checkCycle(num) {
  let rest = 1
  let arr = []

  while (true) {
    while (rest < num) {
      rest *= 10  
    }
    
    if (rest % num == 0) {
      return false
    }

    if (arr.includes(rest)) {
      return arr.length
    }

    arr.push(rest)
    rest = rest % num
  } 
}


let max = 0
let maxD

for (let i = 1; i < 1000; i++) {
  const res = checkCycle(i)
  if (res > max) {
    max = res
    maxD = i
  }
}


console.log(maxD)
