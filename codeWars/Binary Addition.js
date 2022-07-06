function addBinary(a,b) {
  let sum = a + b
  let highest = 1
  let counter = 0
  let finalString = ""
  ///Number of spaces needed
  while(highest < sum){
    highest = highest * 2
    counter++
  }
  ///Fixing highest to be under the sum
  highest = highest / 2

  ///Final logic for adding ones and zeroes
  while(counter > 0){
    if(highest <= sum){
      sum = sum - highest
      highest = highest / 2

      finalString = finalString + "1"
    }else{
      highest = highest / 2

      finalString = finalString + "0"
    }
    
    counter--
  }
  
  return finalString
