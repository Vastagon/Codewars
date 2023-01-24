function reverseWords(str) {
  let words = str.split(" ")
  
  for(let j = 0; j < words.length; j++){
    let temp = ""
    for(let i = words[j].length ; i > 0; i--){
      temp = temp + words[j].substring(i-1,i)
    }    
    words[j] = temp
  }
  return words.join(" ")
}
