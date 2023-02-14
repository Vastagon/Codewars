function nbDig(n, d) {
  let total = 0
  
    for(let i = 0; i <= n; i++){
      let tempString = i * i
      tempString = tempString.toString().split("")

      for(let j = 0; j < tempString?.length; j++){
        if(parseInt(tempString[j]) === d){
          total += 1
        }
      }
    }
  
  return total
}
