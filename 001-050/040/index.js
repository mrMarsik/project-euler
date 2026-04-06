let str = ''

let n = 1

while (str.length < 1000000) {
  str += n
  n++
}

console.log(str[0] * str[9] * str[99] * str[999] * str[9999] * str[99999] * str[999999])