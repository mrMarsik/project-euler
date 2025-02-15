function itsPythagoreanTriplet(a, b, c) {
  if (a < b && b < c && a ** 2 + b ** 2 == c ** 2) {
    return true
  } else return false
}
let result

for (let i = 0; i < 1000; i++) {
  for (let j = 0; j < 1000; j++) {
    for (let k = 0; k < 1000; k++) {
      if (i + j + k == 1000) {
        if (itsPythagoreanTriplet(i, j, k)) {
          result = i * j * k
        }
      }
    }
  }
  
}

console.log(result)
