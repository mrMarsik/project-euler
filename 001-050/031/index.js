let countMain = 0


for (let i200 = 0; i200 <=1; i200++) {
  for (let i100 = 0; i100 <= 2; i100++) {
    for (let i50 = 0; i50 <= 4; i50++) {
      for (let i20 = 0; i20 <= 10; i20++) {
        for (let i10 = 0; i10 <= 20; i10++) {
          for (let i5 = 0; i5 <= 40; i5++) {
            for (let i2 = 0; i2 <= 100; i2++) {
              for (let i1 = 0; i1 <= 200; i1++) {

                const sum = i200 * 200 + i100 * 100 + i50 * 50 + i20 * 20 + i10 * 10 + i5 * 5 + i2 * 2 + i1
               
                if (sum == 200) {
                  countMain++
                }

                if (sum > 200) continue
              }  
            } 
          }  
        } 
      }  
    }
  } 
}


console.log(countMain)
