const { count } = require("console")

function divisorsCount(num) {
  let count = 0
  for (let i = 1; i < num ** 0.5; i++) {
    if (num % i == 0) {
      count++
    }
  }
  count *= 2
  if (num % num ** 0.5 == 0) count ++
  return (count)
}

let countNumber = 1
let number = 0
while (true) {
  number += countNumber
  if (divisorsCount(number) > 500) {
    console.log(number)
    break
  }
  countNumber++
}
