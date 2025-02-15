function sumDivisors(num) {
  let sum = 1
  for (let i = 2; i < num ** 0.5; i++) {
    if (num % i == 0) {
      sum += (i + num / i)
    }
  }
  
  if (num % num ** 0.5 == 0) sum += num ** 0.5
  return (sum)
}


function allAbundantNumber() {
  let AbundantNumberArr = []
  for (let i = 2; i < 28123; i++) {
    if (sumDivisors(i) > i) {
      AbundantNumberArr.push(i)
    }
  }
  return AbundantNumberArr
}

const abundantNumberArr = allAbundantNumber()
let sum = 0
let numbersYes = new Set()

for (const i of abundantNumberArr) {
  for (const j of abundantNumberArr) {
    if (i + j <= 28123) {
      numbersYes.add(i + j)
    }
  }
}
numbersYes = Array.from(numbersYes).sort((a,b) => a-b)

for (let i = 1; i < 28123; i++) {
  
  if (!numbersYes.includes(i)) sum+= i
  
}


console.log(sum)
