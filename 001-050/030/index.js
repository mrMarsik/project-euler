const resultNumbers = []
let result = 0

for (let i = 10; i < 1000000; i++) {
  const numArr = i.toString().split('')
  let sumPowers = 0 
  
  for (const num of numArr) {
    sumPowers += num ** 5
  } 

  if (sumPowers == i) {
    resultNumbers.push(i)
  }
}

for (const num of resultNumbers) {
  result += num
}

console.log(result)


