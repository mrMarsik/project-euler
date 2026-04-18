function checkCyclical(arr) {
  
}


function createTriangularNum(n) {
  return (n * (n + 1) / 2)
}


function createSquareNum(n) {
  return (n * n)
}


function createPentagonNum(n) {
  return (n * (3 * n - 1) / 2)
}


function createHexagonalNum(n) {
  return (n * (2 * n - 1))
}


function createHeptagonalNum(n) {
  return (n * (5 * n - 3) / 2)
}


function createOctagonalNum(n) {
  return (n * (3 * n - 2))
}

let triangularArr = []
let squareArr = []
let pentagonArr = []
let hexagonalArr = []
let heptagonalArr = []
let octagonalArr = []


for (let i = 2; createTriangularNum(i) < 10000; i++) {
  if (createTriangularNum(i) >= 1000) {
    triangularArr.push(createTriangularNum(i))
  }
}

for (let i = 2; createSquareNum(i) < 10000; i++) {
  if (createSquareNum(i) >= 1000) {
    squareArr.push(createSquareNum(i))
  }
}

for (let i = 2; createPentagonNum(i) < 10000; i++) {
  if (createPentagonNum(i) >= 1000) {
    pentagonArr.push(createPentagonNum(i))
  }
}

for (let i = 2; createHexagonalNum(i) < 10000; i++) {
  if (createHexagonalNum(i) >= 1000) {
    hexagonalArr.push(createHexagonalNum(i))
  }
}

for (let i = 2; createHeptagonalNum(i) < 10000; i++) {
  if (createHeptagonalNum(i) >= 1000) {
    heptagonalArr.push(createHeptagonalNum(i))
  }
}

for (let i = 2; createOctagonalNum(i) < 10000; i++) {
  if (createOctagonalNum(i) >= 1000) {
    octagonalArr.push(createOctagonalNum(i))
  }
}







// console.log(triangularArr)
// console.log(squareArr)
// console.log(pentagonArr)
// console.log(hexagonalArr)
// console.log(heptagonalArr)
// console.log(octagonalArr)




checkCyclical([1,2,3,4,5,6])

// console.log(createTriangularNum())
// console.log(createSquareNum())
// console.log(createPentagonNum())
// console.log(createHexagonalNum())
// console.log(createHeptagonalNum())
// console.log(createOctagonalNum())