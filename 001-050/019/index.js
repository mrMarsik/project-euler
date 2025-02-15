function itsleapYear(year) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      return true
    } 
  } else if (year % 4 == 0) {
    return true
  }
  return false
}


function skipMonth() {
  if (dayWeek == 7) {
    sunCount++
  }

  if (monthCount == 2) {
    if (itsleapYear(yearCount)) {
      dayWeek += 29
    } else {
      dayWeek += 28
    }
  } else if ([4,6,9,11].includes(monthCount)) {
    dayWeek += 30
  } else {
    dayWeek += 31
  }
  
  dayWeek = dayWeek % 7
  if(dayWeek == 0) {
    dayWeek = 7
  }

  monthCount ++
  if (monthCount == 13) {
    monthCount = 1
    yearCount ++
  }
}


function yearSkip() {
  for (let i = 0; i < 12; i++) {
    skipMonth()
  }
}


let yearCount = 1900
let monthCount = 1
let dayWeek = 1
let sunCount = 0


yearSkip()
sunCount = 0


for (let i = 0; i < 100; i++) {
  yearSkip()
}


console.log(sunCount)