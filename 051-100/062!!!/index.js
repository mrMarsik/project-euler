let sum = 0

for (let i = 1; i < 100; i++) {
  for (let j = 1; j < 100; j++) {
    if ((i ** j).toString().length == i) {
      sum++
    }    
  }
}

console.log(sum)