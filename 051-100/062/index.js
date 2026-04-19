const cubicNumPermutations = {}

for (let i = 1; true; i++) {
  const cubic = i ** 3
  const name = cubic.toString().split('').sort().join('')


  if (!cubicNumPermutations[name]) {
    cubicNumPermutations[name] = {
      min : cubic,
      arr : [cubic],
    }
  } else {
    cubicNumPermutations[name].arr.push(cubic)
  }


  if (cubicNumPermutations[name].arr.length == 5) {
    console.log(cubicNumPermutations[name].min)
    break
  }

}
