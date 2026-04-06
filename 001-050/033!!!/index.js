

function curiousCheck(obj) {
  let numeratorMini
  let denumeratorMini

  const numeratorArr = obj.numerator.toString().split('')
  const denumeratorArr = obj.denumerator.toString().split('')
  if (numeratorArr[0] == denumeratorArr[0]) {
    numeratorMini = numeratorArr[1]
    denumeratorMini = denumeratorArr[1]
  }
  if (numeratorArr[0] == denumeratorArr[1]) {
    numeratorMini = numeratorArr[1]
    denumeratorMini = denumeratorArr[0]
  } else {
    numeratorMini = +numeratorArr[0]
    denumeratorMini = +denumeratorArr[1]
  }

  if (numeratorMini / denumeratorMini == obj.numerator / obj.denumerator) return true
  return false
}

function nonZeroCheck(obj) {
  if (obj.numerator % 10 == 0) return false
  if (obj.denumerator % 10 == 0) return false
  return true
}

function lessOneCheck(obj) {
  if (obj.numerator < obj.denumerator) return true
  return false
}

function doubleNumbersCheck(obj) {
  const numeratorArr = obj.numerator.toString().split('')
  const denumeratorArr = obj.denumerator.toString().split('')
  if (numeratorArr.includes(denumeratorArr[0] || denumeratorArr[1])) return true
  return false
}
let multNum = 1
let multDenum = 1

for (let i = 10; i < 100; i++) {
  for (let j = 10; j < 100; j++) {
    const obj = {
      numerator: i,
      denumerator: j,
    }
    if (!lessOneCheck(obj)) continue
    if (!doubleNumbersCheck(obj)) continue
    if (!nonZeroCheck(obj)) continue
    if (curiousCheck(obj)) {
      console.log(obj)  
      multDenum *= obj.denumerator
      multNum *=obj.numerator
    }

  }
}



console.log(multDenum/multNum)

