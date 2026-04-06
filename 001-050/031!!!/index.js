const coins = [1, 2, 5, 10, 20, 50, 100, 200]

const coinsObj = {
  2: [],
  5: [],
  10: [],
  20: [],
  50: [],
  100: [],
  200: [],
}

for (let i = 1; i < coins.length; i++) {
  const coinArr = []
  let x = coins[i] / coins[i - 1]
  let y = coins[i] % coins[i - 1]
  
  for (let j = 1; j <= x; j++) {
    coinArr.push(coins[i - 1])
  }

  if (y != 0) coinArr.push(coins[i - 2])
  
  
  coinsObj[coins[i]].push(...coinArr)
}

console.log(coinsObj)

// const coinsObj = {
//   1: null,
//   2: null,
//   5: null,
//   10: null,
//   20: null,
//   50: null,
//   100: null,
//   200: null,

// }