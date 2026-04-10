let count = 0
let num = 0
let arr = []


for (let i = 1; i < 10; i++) {

  let flag = false
  for (let j = 1; true; j++) {
    
    if ((i ** j).toString().length == j) {
      count++
      flag = true
    } 

    if (flag) {
      if ((i ** j).toString().length != j) {
        break
      }
    } 
    
  }
}


console.log(count)