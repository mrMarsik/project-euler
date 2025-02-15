let number = BigInt(2 ** 1000)
number = number
  .toString()
  .split('')

let sum = 0

for (const i of number) {
  sum += +i
}

console.log(sum)