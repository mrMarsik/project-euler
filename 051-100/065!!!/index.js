
let a = 3n
let b = 2n

for (let i = 0; i < 8; i++) {
  let temp = b
  b = a + b
  a = temp + temp + a
}


let sum = 0

for (const num of a.toString()) {
  sum += +num
}

console.log(sum)

