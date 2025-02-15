function itsPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}

function checkValid(num) {
  return numArr.every(i => num % i == 0);
}

const num = 20 
const numArr = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let result = 1

for (let i = 1; i <= num; i++) {
  result *= i
}

for (const i of numArr) {
  while (true) {
    if (checkValid(result / i)) {
      result /= i
    } else break
  }  
}

console.log(result)
