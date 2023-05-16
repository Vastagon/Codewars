function order(words){
  let wordArray = words.split(" ")
  let finalArray = Array.apply(null, Array(wordArray.length)).map(function () {})
  
  for(let i = 0; i < wordArray.length; i++){    
    let temp = wordArray[i].replace(/[qQwWeErRtTyYuUiIoOpPaAsSdDfFgGhHjJkKlLzZxXcCvVBbnNmM]/gi, '');

    finalArray[temp-1] = wordArray[i]
  }
  
  let finalString = finalArray.join(" ")
  
  return finalString
}
