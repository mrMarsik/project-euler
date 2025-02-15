let n = 3
let result = 1

while (n <= 1001) {
  let circleSum = ((n-2) ** 2) * 4 + (n-1) * 10
  result += circleSum
  n+= 2
}

console.log(result)
