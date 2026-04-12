function checkPrimeNum(n) {
  if (n[0] == '0') return false

  for (let i = 2; i <= n ** 0.5; i++) {
    if (n % i == 0) return false
  }   

  return true
}


function nextPrime(n) {
  while (true) {
    n++
    if (checkPrimeNum(n)) return n
  }
}


function replacements(num, posArr) {
  let arr = []

  num = num.toString().split('')

  for (const pos of posArr) {
    num[pos] = 'X'
  }

  num = num.join('')
  
  for (let i = 0; i < 10; i++) {
    
    if (checkPrimeNum(num.replaceAll('X', i))) {
      arr.push(num.replaceAll('X', i))
    }
  }

  return arr
}


function createPositions(num) {
  let posArrArr = []
  const numLength = num.toString().length
  const rangeArr = []
  
  for (let i = 0; i < numLength; i++) {  
    rangeArr.push(i)
  }

  for (let max = 1; max < numLength; max++) {    
    posArrArr.push(...combinations(numLength, max))
  }

  return posArrArr
}


function combinations(m, n) {
  const result = [];

  function backtrack(start, comb) {
    if (comb.length === n) {
      result.push([...comb]);
      return;
    }

    for (let i = start; i <= m; i++) {
      comb.push(i);
      backtrack(i + 1, comb);
      comb.pop();
    }
  }

  backtrack(0, []);
  return result;
}

let num = 13
main: while (true) {
  let posArr = createPositions(num) 
  let posSet = new Set()

  for (let pos of posArr) {
    posSet.add(pos.sort().join(''))
  }

  posArr = []
  posArr.push(...posSet)
  // console.log(posArr)
  for (let pos of posArr) {
    if (replacements(num, pos).length == 8) {
      console.log(replacements(num, pos).sort()[0])

      break main
    } 
  }

  num = nextPrime(num)
}
