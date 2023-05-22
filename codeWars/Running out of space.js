function spacey(array){
  let runThrough = 1
  let finalArray = []
  
  while (runThrough < array.length+1){
    let tempString = ""
    
    for(let i = 0; i < runThrough; i++){
      tempString += array[i]  
    }
    finalArray.push(tempString)
    
    runThrough++
  }
  
  return finalArray
}
