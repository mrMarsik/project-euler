const numbers = {
  1 : 3,
  2 : 3,
  3 : 5,
  4 : 4,
  5 : 4,
  6 : 3,
  7 : 5,
  8 : 5,
  9 : 4,
  10 : 3,
  11 : 6,
  12 : 6,
  13 : 8,
  14 : 8,
  15 : 7,
  16 : 7,
  17 : 9,
  18 : 8,
  19 : 8,
  20 : 6,
  30 : 6,
  40 : 5,
  50 : 5,
  60 : 5,
  70 : 7,
  80 : 6,
  90 : 6,
  100 : 7,
  1000 : 8,
}


function twenty() {
  let sum = 0
  for (let i = 1; i < 20; i++) {
    sum += numbers[i]    
  }
  return sum
}


function hundred() {
  let sum = 0
  sum += twenty()
  for (let i = 20; i <= 90; i += 10) {
    sum += numbers[i]    
    for (let j = 1; j <= 9; j++) {
      sum += numbers[i]
      sum += numbers[j]
    } 
  }
  return sum
}


let result = 0
result += hundred()

for (let i = 1; i <= 9; i++) {
  result += (numbers[i] + numbers[100])
  result += (numbers[i] + numbers[100] + 3) * 99
  result += hundred()
}

result += (numbers[1000] + numbers[1])

console.log(result)
