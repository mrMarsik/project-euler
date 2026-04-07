function createPentagonNum(n) {
  return (n * (3 * n - 1) / 2)
}


function checkPentagonNum(n) {
  let cur = 1

  for (let i = 2; n >= cur; i++) {
    if (cur == n) {
      return true
    }
    cur = createPentagonNum(i)
    
  }

  return false
}



const arr = [1]

main: for (let i = 2; true; i++) {

  let newElement = createPentagonNum(i)

  for (const num of arr) {
    let difference = newElement - num
    let sum = newElement + num

    if (arr.includes(difference)) {
      if (checkPentagonNum(sum)) {
        console.log(difference)

        break main
      }
    }
  }

  arr.push(newElement)

}


