function highAndLow(numbers){
  const numArray = numbers.split(" ");
  let highNum = numArray[0]
  let lowNum = numArray[0]
  for(let i = 0; i < numArray.length; i++){
    lowNum = Math.min(parseInt(numArray[i]), lowNum)
    highNum = Math.max(parseInt(numArray[i]), highNum)
  }
  
  return `${highNum} ${lowNum}`
}
