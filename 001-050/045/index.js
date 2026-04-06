function createTriangularNum(n) {
  return (n * (n + 1) / 2)
}


function createPentagonNum(n) {
  return (n * (3 * n - 1) / 2)
}


function createHexagonalNum(n) {
  return (n * (2 * n - 1))
}


const obj = {
  t : {key : 286, value : null},
  p : {key : 166, value : null},
  h : {key : 144, value : null},
}


while (true) {

  obj.t.value = createTriangularNum(obj.t.key)
  obj.p.value = createPentagonNum(obj.p.key)
  obj.h.value = createHexagonalNum(obj.h.key)

  if (obj.t.value == obj.p.value && obj.p.value== obj.h.value) {
    console.log(obj.t.value)
    break
  }

  let minName = null;
  let minValue = Infinity;

  for (const name in obj) {
    if (obj[name].value < minValue) {
      minValue = obj[name].value;
      minName = name;
    }
  }

  obj[minName].key += 1;
}

