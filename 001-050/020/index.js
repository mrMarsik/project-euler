let sum = BigInt(1)
let result = 0

for (let i = BigInt(1); i <= 100; i++) {
  sum*=i
}

const arrNum = sum.toString().split('')

for (const i of arrNum) {
  result += +i
}

console.log(result)