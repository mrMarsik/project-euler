//41
function createRow(row) {
  let newRow = []
  for (let i = 0; i <= row.length; i++) {
    newRow[i] = (row[i] + row[i-1] || 1)
  }
  return newRow
}
function pascalsTriangle(n) {
  let row = []
  for (let i = 0; i < n; i++) {
    row = createRow(row)
  }
  return row
}

const row = (pascalsTriangle(41))
console.log(row[Math.floor(row.length/2)])