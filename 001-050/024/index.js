let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function sortNumber() {
  const numArr = []
  for (let a = 0; a < 10; a++) {
    for (let b = 0; b < 9; b++) {
      for (let c = 0; c < 8; c++) {
        for (let d = 0; d < 7; d++) {
          for (let e = 0; e < 6; e++) {
            for (let f = 0; f < 5; f++) {
              for (let g = 0; g < 4; g++) {
                for (let i = 0; i < 3; i++) {
                  for (let j = 0; j < 2; j++) {
                    const minNums = numbers.slice()
                    const numArrmini = []
                    numArrmini.push(minNums[a])
                    minNums.splice(a, 1)
                    numArrmini.push(minNums[b])
                    minNums.splice(b, 1)
                    numArrmini.push(minNums[c])
                    minNums.splice(c, 1)
                    numArrmini.push(minNums[d])
                    minNums.splice(d, 1)
                    numArrmini.push(minNums[e])
                    minNums.splice(e, 1)
                    numArrmini.push(minNums[f])
                    minNums.splice(f, 1)
                    numArrmini.push(minNums[g])
                    minNums.splice(g, 1)
                    numArrmini.push(minNums[i])
                    minNums.splice(i, 1)
                    numArrmini.push(minNums[j])
                    minNums.splice(j, 1)
                    numArrmini.push(minNums[0])
                    numArr.push(numArrmini.join(''))
                  }  
                }
              }
            }
          }
        }
      }
    }
  }
  return numArr
}

const numArr = sortNumber()
console.log(numArr[999999])
