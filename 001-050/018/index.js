const fs = require('fs')

const file = fs.readFileSync('numbers', 'utf-8')

let data =
  file
  .split('\n')

let numArr = []

for (const i of data) {
  numArr.push(i.split(' '))
}

for (let row = 0; row < numArr.length; row++) {
  for (let num = 0; num < numArr[row].length; num++) {
    if (numArr[row][num][0] == '0') {
      numArr[row][num] = numArr[row][num][1]
    }
  }
} 

const directions = [
  [1, 0],
  [1, 1],
]
const graph = {}
const startId = 'start'
graph[startId] = {}
const neighborId = '0,0'
const distance = numArr[0][0]
graph[startId][neighborId] = +distance

for (let row = 0; row < numArr.length; row++) {
  if (row == numArr.length - 1) {
    for (let num = 0; num < numArr[row].length; num++) {
      const id = `${row},${num}`
      graph[id] = {} 
      const neighborId = 'end'
      const distance = 0
      graph[id][neighborId] = distance
    }
    const endId = 'end' 
    graph[endId] = {}
    break
  }
  for (let num = 0; num < numArr[row].length; num++) {
    const id = `${row},${num}`
    graph[id] = {} 
    for (const [dr, dn] of directions) {
      let nr = row + dr
      let nn = num + dn
      const neighborId = `${nr},${nn}`
      const distance = numArr[nr][nn]
      graph[id][neighborId] = +distance
    }
  }
}

function findMaxPath(graph, start, end) {
  const distances = {}
  const path = {}
  const queue = ['start']

  for (const key in graph) {
    if (key == start) {
      distances[start] = 0
    } else {
      distances[key] = -Infinity
    }
  }
  
  while (queue.length > 0) {
    const node = queue.shift()

    const neighbors = graph[node]
    for(const key in neighbors) {
      const newDistance = distances[node] + neighbors[key]
      if (newDistance > distances[key]) {
        distances[key] = newDistance
        path[key] = node
      }
      queue.push(key)
    }
    
  }
  const maxPathSum = distances[end]
  return maxPathSum 
}

console.log(findMaxPath(graph,'start','end'))
