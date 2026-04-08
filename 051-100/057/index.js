let count = 0

let a = 3n
let b = 2n
for (let i = 0; i < 1000; i++) {
  if (a.toString().length > b.toString().length) {
    count ++
  }

  let temp = b
  b = a + b
  a = temp + temp + a
}

console.log(count)